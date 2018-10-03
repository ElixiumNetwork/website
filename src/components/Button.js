import React from 'react'

export default props => (
  <button
    onClick={ props.onClick }
    className={ props.primary ? 'btn btn-primary' : 'btn btn-secondary' }
  >
    { props.text }
  </button>
)
