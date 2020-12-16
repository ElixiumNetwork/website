import React from 'react'

export default props => (
  <button
    onClick={ props.onClick }
    className={ props.buttonclass? props.buttonclass :props.primary ? 'btn btn-primary' : 'btn btn-secondary' }
    type={ props.submit ? 'submit' : 'button' }
  >
    { props.text }
  </button>
)
