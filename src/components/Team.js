import React, { Component } from 'react'

import shortid from 'shortid'

export default class Team extends Component {
  state = {
    contributors: []
  }

  fetchContributors = async () => {
    let response = await fetch('https://api.github.com/repos/ElixiumNetwork/elixium_core/stats/contributors', {
      headers: {
        'Content-Type': 'application/vnd.github.hellcat-preview+json'
      }
    })
    .then(res => res.json())

    return response.sort((a, b) => b.total - a.total).map(c => c.author)
  }

  openGithub = url => () => window.open(url, '_blank')

  componentDidMount() {
    this.fetchContributors().then(contributors => this.setState({ contributors }))
  }

  render() {
    return (
      <div className="Team">
        { this.state.contributors.map(contributor => (
          <div key={ shortid.generate() }  className="member" onClick={ this.openGithub(contributor.html_url) }>
            <img src={ contributor.avatar_url } alt={ contributor.login } />
            <h3>{ contributor.login }</h3>
          </div>
        ))}
      </div>
    )
  }
}
