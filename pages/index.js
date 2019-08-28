import React from 'react'
import Link from 'next/link';
import Header from '../components/Header'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import AboveTheFold from '../containers/AboveTheFold'
import RoadMap from '../containers/RoadMap'
import TeamSection from '../containers/TeamSection'
import Features from '../containers/Features'
import ICO from '../containers/ICO'
import BlockExplorer from '../containers/BlockExplorer'

import "../css/App.css";
import 'react-table/react-table.css'

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
const Home = () => (
  <div className="App">
    <Header />
    <Navbar />
    <Landing />
  </div>
)

export default Home
