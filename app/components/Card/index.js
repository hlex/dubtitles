import React from 'react'

const Card = (props) => {
  return <div className={`dubtitleCard ${props.className}`}>{props.children}</div>
}

export default Card
