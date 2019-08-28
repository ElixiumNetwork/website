import React from 'react'

export default props => (
  <React.Fragment>
    {props.dark && props.curve && <img src="../static/images/footer_curve.svg" className="purple-curve" alt='footer_curve' />}
    <div className={props.dark ? "Section dark" : "Section"} {...props} >
      {props.children}
    </div>
  </React.Fragment>
)
