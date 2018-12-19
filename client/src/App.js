import React, { Component } from 'react'
import { BrowserRouter as Router, Route } from 'react-router-dom'
import Footer from './components/Footer'
import Navbar from './components/Navbar'
import AboveTheFold from './containers/AboveTheFold'
import RoadMap from './containers/RoadMap'
import TeamSection from './containers/TeamSection'
import Features from './containers/Features'
import ICO from './containers/ICO'
import BlockExplorer from './containers/BlockExplorer'
import BlockExplorerBlock from './containers/Block'
import './App.css'

const Landing = () => (
  <React.Fragment>
    <AboveTheFold />
    <Features />
    <RoadMap />
    <TeamSection />
    <ICO />
    <Footer />
  </React.Fragment>
)

class App extends Component {
  render() {
    return (
      <Router>
        <div className="App">
          <Navbar />
          <Route path='/' exact component={Landing} />
          <Route path='/blockexplorer/block/:hash' component={BlockExplorerBlock} />
          <Route path='/blockexplorer' exact component={BlockExplorer} />
        </div>
      </Router>
    )
  }
}

export default App
