 import React, { Component } from 'react'

export default class Team extends Component {
  state = {
    repos: [],
    contributors: []
  }

  fetchContributors = async () => {
    let response = await fetch('https://api.github.com/repos/ElixiumNetwork/elixium_core/stats/contributors', {
  fetchRepos = async () => {
    let response = await fetch('https://api.github.com/orgs/ElixiumNetwork/repos', {
      headers: {
        'Content-Type': 'application/vnd.github.hellcat-preview+json'
        'Content-Type': 'application/vnd.github.nightshade-preview+json'
      }
    })
    .then(res => res.json())
      .then(res => res.json())
    this.setState({ repos: response })
    // console.log(response)
    this.fetchContributors();
  }




  fetchContributors = async () => {
    let userArr = []
    for (let i = 0; i < this.state.repos.length; i++) {
      let response = await fetch('https://api.github.com/repos/' + this.state.repos[i].full_name + '/stats/contributors', {
        headers: {
          'Content-Type': 'application/vnd.github.hellcat-preview+json'
        }
      })
        .then(res => res.json())
      userArr.push(response);
    }
    userArr = [].concat.apply([], userArr);
    this.removeDuplicates(userArr);
  }

  removeDuplicates(data) {
    let userArr = [];
    let trimmedArray = [];
    let values = [];
    let value;
    // create required array
    for (let i = 0; i < data.length; i++) {
      userArr.push({
        login: data[i].author.login,
        id: data[i].author.id,
        avatar_url: data[i].author.avatar_url,
        html_url: data[i].author.html_url
      });
    }
    // remove duplicates
    for (var i = 0; i < userArr.length; i++) {
      value = userArr[i]['login'];
      if (values.indexOf(value) === -1) {
        trimmedArray.push(userArr[i]);
        values.push(value);
      }
    }
    this.setState({ contributors: trimmedArray })

    return response.sort((a, b) => b.total - a.total).map(c => c.author)
  }

  openGithub = url => () => window.open(url, '_blank')

  componentDidMount() {
    this.fetchContributors().then(contributors => this.setState({ contributors }))
    this.fetchRepos()
  }

  render() {
    return (
      <div className="Team">
        { this.state.contributors.map(contributor => (
          <div key={ contributor.id }  className="member" onClick={ this.openGithub(contributor.html_url) }>
            <img src={ contributor.avatar_url } alt={ contributor.login } />
            <h3>{ contributor.login }</h3>

        {this.state.contributors.map(contributor => (
          <div key={contributor.id} className="member" onClick={this.openGithub(contributor.html_url)}>
            <img src={contributor.avatar_url} alt={contributor.login} />
            <h3>{contributor.login}</h3>
          </div>
        ))}
      </div>
    )
  }
}
}
