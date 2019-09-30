import React from 'react'

export default props => (
  <h2 className={ props.white ? "SectionHeader white" : "SectionHeader"}>
    { props.children }
  </h2>
)
