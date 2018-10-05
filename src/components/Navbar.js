import React from 'react'
import Button from './Button'
import logo from '../assets/images/logo.svg'

const scrollToPresale = () => {
  document.getElementById('presale').scrollIntoView()
}

export default props => (
  <div className="Navbar">
    <img src={ logo } alt='Elixium Logo' className="logo"/>
    <div className="links">
      <a href="#features">Features</a>
      <a href="#roadmap">Roadmap</a>
      <a href="/3">Whitepaper</a>
      <a href="#faq">FAQs</a>
      <Button primary text="Buy Elixium" onClick={ scrollToPresale } />
    </div>
  </div>
)
