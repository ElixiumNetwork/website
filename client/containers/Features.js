import React from 'react'
import Section from './Section'
import SectionHeader from '../components/SectionHeader'
import lightning from '../assets/images/electricity.svg'
import anonymous from '../assets/images/anonymous.svg'
import script from '../assets/images/script.svg'
import purpleCurve from '../assets/images/curve.png'

export default props => (
  <React.Fragment>
    <img src={ purpleCurve } style={{ width: '100%', display: 'block', marginBottom: '-1px' }} />
    <Section dark id="features">
      <SectionHeader white>Features</SectionHeader>
      <div className="textBlock light centered">
        <img src={ lightning } alt='Lightning' />
        <h3>Fast & Reliable</h3>
        <p>
          Built with the extremely fault tolerant technology behind the
          telecom industry, Elixir/Erlang/OTP, Elixium extends blockchain
          fault tolerance while parallelizing blockchain and contract code
          for increased performance.
        </p>
      </div>
      <div className="textBlock light centered">
        <img src={ anonymous } alt='Anonymous' />
        <h3>Anonymous</h3>
        <p>
          Using Zero-knowledge Proof of Work and standardized intervalized
          key-swapping, Elixium is able to protect the identity of its users
          by ensuring that they can not be identified by transaction contents
          or patterns.
        </p>
      </div>
      <div className="textBlock light centered">
        <img src={ script } alt='Scriptable' />
        <h3>Scriptable</h3>
        <p>
          Elixium takes a unique stance on smart contracting -- Elixium is
          language agnostic, smart contracts can be written in any language
          that compiles to WebAssembly, which means developers can use
          their existing toolset rather than learning a new one.
        </p>
      </div>
    </Section>
  </React.Fragment>
)
