import React from 'react'
import corn1 from '../../images/corn1.svg'
import corn2 from '../../images/corn2.svg'

export default props => (
  <img
    className={`corn ${props.absolute ? 'abs' : ''}`}
    style={props.style}
    src={props.type === 1 ? corn1 : corn2}
  />
)
