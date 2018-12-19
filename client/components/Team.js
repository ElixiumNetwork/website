import React, { Component } from 'react'

export default class Team extends Component {
  state = {
    contributors: []
  }
  openGithub = url => () => window.open(url, '_blank')

  getList = async () => {
    await fetch('/api/getList')
      .then(response => response.json())
      .then(data => this.setState({ contributors: data }));
  }

  componentDidMount() {
    this.getList()
  }

  render() {
    return (
      <div className="Team">
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

