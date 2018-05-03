import React from 'react'
import anime from 'animejs'

const curveAnimation = (selector, path, delay = 0) => {
  anime({
    targets: selector,
    d: path,
    delay: delay,
    elasticity: 200,
    duration: 1000
  })
}

export default class extends React.Component {
  componentDidMount() {
    const curvePaths = [
      'M0,199V33S190,153.92,499.5,153.92C990.58,153.92,1065,0,1427.25,0,1712.37,0,1887,61.28,1920,79.14V196Z',
      'M0,19.8S278,204,552,204C1070,204,1064,.41,1478.38 .41,1780,0.41,1920,124,1920,124V285H1V19.8Z',
      'M0,48.38S291.69,211.11,565,211.11C945,211.11,1099,.5,1487,0.5,1779.39,0.5,1920,107,1920,107V352H0V48.38Z'
    ]
    curveAnimation('#curve0', curvePaths[0])
    curveAnimation('#curve1', curvePaths[1], 50)
    curveAnimation('#curve2', curvePaths[2], 100)
  }
  render() {
    return (
      <div className='wave-container'>
        {this.props.children}
        <div className='svg-container'>
          <svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 1920 495'>
            <path
              id='curve2'
              d='M0,352S291.69,352,565,352C945,352,1099,352,1487,352,1779.39,352,1920,352,1920,352V352H0V48.38Z'
              transform='translate(0, 145)'
            />
            <path
              id='curve1'
              d='M0,285S278,285,552,285C1070,285,1064,285,1478.38 285,1780,285,1920,285,1920,285V285H1V19.8Z'
              transform='translate(0, 215)'
            />
            <path
              id='curve0'
              d='M0,199V195S195,195,499.5,195C990.58,195,1065,195,1427.25,195,1712.37,195,1887,195,1920,195V196Z'
              transform='translate(0, 305)'
            />
          </svg>
        </div>
      </div>
    )
  }
}
