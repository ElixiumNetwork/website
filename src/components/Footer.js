import React from 'react'
import curve from '../assets/images/footer_curve.png'

export default props => (
  <div className="Footer">
    <img src={ curve } className="purple-curve" alt='' />
    <div className="Footer-body">
      <div className="Footer-text">
        <h3>Our Mission</h3>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          faucibus pellentesque velit bibendum molestie. Aenean eget
          pretium leo. Cras tincidunt mauris ante, luctus volutpat nibh
          sollicitudin vitae.
        </p>
      </div>
      <div className="Footer-links">
        <div className="Footer-section">
          <h3>Resources</h3>
          <a href='/whitepaper'>Whitepaper</a>
          <a href='https://www.github.com/ElixiumNetwork/elixium_core'>Source</a>
          <a href='https://research.elixium.app'>Research</a>
          <a href='https://blog.elixium.app'>Blog</a>
        </div>
        <div className="Footer-section">
          <h3>Foundation</h3>
          <a href='/'>About</a>
          <a href='/'>Team</a>
          <a href='mailto:team@elixium.app'>Contact</a>
        </div>
        <div className="Footer-section">
          <h3>Get Involved</h3>
          <a href='https://www.twitter.com/ElixiumNetwork'>Twitter</a>
          <a href='https://t.me/ElixiumNetwork'>Telegram</a>
          <a href='https://www.github.com/ElixiumNetwork'>GitHub</a>
          <a href='https://www.reddit.com/r/elixium'>Reddit</a>
        </div>
      </div>
    </div>
  </div>
)
