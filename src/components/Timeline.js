import React from 'react'

const events = [
  {
    title: 'Founded',
    date: 'Feb 2018',
    description: 'This is a description of the event',
    completed: true
  },
  {
    title: 'Rebranded',
    date: 'Jul 2018',
    description: 'Rebranded from UltraDark to Elixium',
    completed: true
  },
  {
    title: 'TestNet Launch',
    date: 'Nov 2018',
    description: 'Public launch of the Elixium TestNet'
  },
  {
    title: 'Whitepaper Release',
    date: 'Nov 2018',
    description: 'Release a technical whitepaper'
  },
  {
    title: 'MainNet Launch',
    date: 'Dec 2018',
    description: 'Public launch of the Elixium MainNet'
  },
  {
    title: 'ICO',
    date: 'Jan 2019',
    description: 'Initial coin offering for potential investors'
  },
  {
    title: 'Exchange Listing',
    date: 'Mar 2019',
    description: 'Get listed on one major exchange'
  },
]

const topEvents = events.filter((event, i) => i % 2 !== 0)
const bottomEvents = events.filter((event, i) => i % 2 === 0)
const completedEvents = events.filter(event => event.completed).length

export default props => (
  <div className="Timeline">
    { topEvents.map((event, i) => (
      <div style={{
        left: `${(100 / events.length) * (i * 2 + 1)}%`,
        display: 'inline-block',
        position: 'absolute',
        top: '-120px'
      }}>
        <div className="Timeline-box">
          <h4> { event.title } </h4>
          <h5> { event.date } </h5>
          <p> { event.description } </p>
        </div>
        <div className="triangle-down" />
      </div>
    ))}
    <progress
      value={ (completedEvents === events.length ? completedEvents : (completedEvents - 1) / events.length) * 100 }
      max='100'
      className="line"
    />
    { bottomEvents.map((event, i) => (
      <div style={{
        left: `${(100 / events.length) * (i * 2)}%`,
        display: 'inline-block',
        position: 'absolute'
      }}>
        <div className="triangle-up" />
        <div className="Timeline-box">
          <h4> { event.title } </h4>
          <h5> { event.date } </h5>
          <p> { event.description } </p>
        </div>
      </div>
    ))}
  </div>
)
