import React from 'react'
import Section from './Section'
import SectionHeader from '../components/SectionHeader'

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
    <img src="../static/images/roadmap.svg" alt='roadmap' style={{ width: '100%' }} className="hidden-before-mobile" />
    <img src="../static/images/roadmap_mobile.svg" alt='roadmap' style={{ width: '100%' }} className="hidden-past-mobile" />
  </Section>
)
