import React from 'react'
import Section from './Section'
import Timeline from '../components/Timeline'
import SectionHeader from '../components/SectionHeader'

export default props => (
  <Section
    ref={ ref => this.roadmap = ref }
    style={{
      paddingLeft: '100px',
      paddingRight: '100px',
      paddingTop: '40px',
      paddingBottom: '60px'
  }}>
    <SectionHeader>Project Roadmap</SectionHeader>
    <Timeline />
  </Section>
)
