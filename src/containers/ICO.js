import React from 'react'
import Section from './Section'
import EmailDrop from '../components/EmailDrop'
import deskImage from '../assets/images/desk.png'

export default props => (
  <Section style={{ paddingTop: '20px' }} id="presale">
    <EmailDrop />
    <img src={ deskImage } className="sectionImage hidden-before-mobile" alt='' />
  </Section>
)
