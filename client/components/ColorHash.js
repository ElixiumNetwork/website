import React, { Component } from 'react'

class ColorHash extends Component {
  render() {
    let colorBytes = this.props.hash.substring(2, 62).match(/.{6}/g)

    return(
      <span>
        { this.props.hash.substring(0, 2) }
        { colorBytes.map(color => (
          <span style={{ background: `#${color}`, color: 'rgba(0,0,0,0)' }}>0</span>
        )) }
        { this.props.hash.substring(62, 64) }
      </span>
    )
  }
}

export default ColorHash
