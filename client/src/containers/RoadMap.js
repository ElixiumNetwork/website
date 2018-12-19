import React from 'react'
import Section from './Section'
import Timeline from '../components/Timeline'
import SectionHeader from '../components/SectionHeader'
import roadmap from '../assets/images/roadmap.svg'
import roadmapMobile from '../assets/images/roadmap_mobile.svg'

export default props => (
  <Section
    id="roadmap"
    style={{
      paddingLeft: '100px',
      paddingRight: '100px',
      paddingTop: '40px',
      paddingBottom: '60px'
  }}>
    <SectionHeader>Project Roadmap</SectionHeader>
    <img src={ roadmap } style={{ width: '100%' }} className="hidden-before-mobile" />
    <img src={ roadmapMobile } style={{ width: '100%' }} className="hidden-past-mobile" />
  </Section>
)
