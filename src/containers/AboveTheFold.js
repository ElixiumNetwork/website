import React from 'react'
import Button from '../components/Button'
import Section from './Section'
import headerImage from '../assets/images/Cryptocurrency.svg'

const openTelegram = () => {
  window.open('https://t.me/elixiumnetwork', '_blank')
}

export default props => (
  <Section className="main-area">
    <img src={ headerImage } className="sectionImage right hidden-past-mobile" alt='' />
    <div className="textBlock main-area-text">
      <h1>The Future of the Internet is Here</h1>
      <p>
        Replace your tech stack with a decentralized network built to work
        for you, in a way that works for you. No more learning new
        languages to build for the new web.
      </p>
      <Button primary text='Telegram Group' onClick={ openTelegram } />
    </div>
    <img src={ headerImage } className="sectionImage right hidden-before-mobile" alt='' />
  </Section>
)
