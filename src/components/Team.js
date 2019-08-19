import React, { Component } from 'react'

const api_repos = 'https://api.github.com/orgs/ElixiumNetwork/repos';
const nodata_tiles = Array.from({ length: 10 }, (v, k) => k + 1);

export default class Team extends Component {
  state = {
    repos: [],
    contributors: []
  }

  fetchRepos = async () => {
    let response = await fetch(api_repos, {
      headers: { 'Content-Type': 'application/vnd.github.hellcat-preview+json' }
    })
      .then(res => res.json())
    this.setState({ repos: response })
    this.fetchContributors();
  }


  fetchContributors = async () => {
    let userArr = []
    for (let i = 0; i < this.state.repos.length; i++) {
      let response = await fetch('https://api.github.com/repos/' + this.state.repos[i].full_name + '/stats/contributors', {
        headers: { 'Content-Type': 'application/vnd.github.hellcat-preview+json' }
      })
        .then(res => res.json())
      userArr.push(response);
    }
    userArr = userArr.flat();
    this.removeDuplicates(userArr);
  }

  removeDuplicates(data) {

    let userArr = data.map(person => ({
      login: person.author.login,
      id: person.author.id,
      avatar_url: person.author.avatar_url,
      html_url: person.author.html_url,
      total: person.total
    }));

    // remove duplicates
    let uniqueUsers = Array.from(new Set(userArr.map(a => a.login)))
      .map(id => {
        return userArr.find(a => a.login === id)
      })

    uniqueUsers.sort((a, b) => b.total - a.total).map(c => c.author);

    this.setState({ contributors: uniqueUsers })
    sessionStorage.setItem("contributors", JSON.stringify(uniqueUsers));
  }

  openGithub = url => () => window.open(url, '_blank')

  componentDidMount() {
    if (sessionStorage.getItem('contributors')) {
      const peoples = sessionStorage.getItem('contributors');
      this.setState({ contributors: JSON.parse(peoples) })
    }
    else {
      this.fetchRepos()
    }
  }



  render() {

    return (
      <div className="Team">
        {this.state.contributors && this.state.contributors.length > 0 ? (this.state.contributors.map(contributor => (
          <div key={contributor.id} className="member" onClick={this.openGithub(contributor.html_url)}>
            <img src={contributor.avatar_url} alt={contributor.login} />
            <h3>{contributor.login}</h3>
          </div>
        ))) : (nodata_tiles.map((item, i) => (
          <div className="member" key={i}>
            <img src='https://media0.giphy.com/media/3oEjI6SIIHBdRxXI40/giphy.gif' alt='user' />
          </div>
        )))}
      </div>
    )
  }
}

