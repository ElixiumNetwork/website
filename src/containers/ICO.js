import React, { Component } from 'react'
import Section from './Section'
import EmailDrop from '../components/EmailDrop'
import spinner from '../assets/images/spinner.mp4'

export default class ICO extends Component {
  componentDidMount() {
    this.video.playbackRate = 0.8
  }

  render() {
    return (
      <Section style={{ paddingTop: '20px' }} id="presale">
        <EmailDrop />
        <video
          autoPlay
          loop
          muted
          className="sectionImage hidden-before-mobile"
          ref={ ref => this.video = ref }
        >
          <source src={ spinner } type='video/mp4' />
        </video>
      </Section>
    )
  }
}
