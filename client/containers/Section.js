import React from 'react'
import curve from '../assets/images/footer_curve.png'

export default props => (
  <React.Fragment>
    { props.dark && props.curve && <img src={ curve } className="purple-curve" alt='' /> }
    <div className={ props.dark ? "Section dark" : "Section" } {...props} >
      { props.children }
    </div>
  </React.Fragment>
)
