import React, { Component } from 'react'
import Button from './Button'

export default class EmailDrop extends Component {
  render() {
    return (
      <div className="EmailDrop">
        <h2>Elixium Pre-Sale</h2>
        <p>
          We're excited that you're excited! Unfortunately, we aren't to distribute
          tokens just yet, but leave us your email and we'll make sure to let you
          know as soon as you can get in on the fun.
        </p>
        <form
          action='https://app.us19.list-manage.com/subscribe/post?u=e77faeab3fddec97cd415c3fd&amp;id=6c0209dba9'
          method='post'
          style={{ display: 'flex' }}
          target="_blank"
          noValidate
        >
          <input type='text' name='EMAIL' placeholder='you@example.com' onChange={ this.updateEmail } />
          <Button primary text='Sign Me Up' submit />
        </form>
        <p>We won't spam you (ever)</p>
      </div>
    )
  }
}
