import React from 'react'
import Button from '../components/Button'
import Section from './Section'
import headerImage from '../assets/images/Cryptocurrency.png'

export default props => (
  <Section>
    <div className="textBlock">
      <h1>The Future of the Internet is Here</h1>
      <p>
        Replace your tech stack with a decentralized network built to work
        for you, in a way that works for you. No more learning new
        languages to build for the new web.
      </p>
      <Button primary text='Learn More' />
    </div>
    <img src={ headerImage } className="sectionImage right" />
  </Section>
)
