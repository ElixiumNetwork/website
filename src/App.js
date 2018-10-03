import React, { Component } from 'react'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AboveTheFold from './containers/AboveTheFold'
import RoadMap from './containers/RoadMap'
import TeamSection from './containers/TeamSection'
import Features from './containers/Features'
import ICO from './containers/ICO.js'
import './App.css'


class App extends Component {
  render() {
    return (
      <div className="App">
        <Navbar />
        <AboveTheFold />
        <Features />
        <RoadMap />
        <TeamSection />
        <ICO />
        <Footer />
      </div>
    )
  }
}

export default App
