import React from 'react'
import Button from './Button'
import logo from '../assets/images/logo.svg'

export default props => (
  <div className="Navbar">
    <img src={ logo } alt='Elixium Logo' className="logo"/>
    <div className="links">
      <a href="/1">FAQ</a>
      <a href="/2">Team</a>
      <a href="/3">Whitepaper</a>
      <Button primary text="Buy Elixium" />
    </div>
  </div>
)
