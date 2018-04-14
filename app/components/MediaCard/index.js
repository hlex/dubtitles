import React from 'react'

export default class MeidaCard extends React.Component {
  render () {
    const { title, subTitle, timing, img } = this.props
    return (
      <div className='mediaCard'>
        <img src={img} />
        <div style={{ display: 'flex', 'flexDirection': 'row' }} >
          "<div className='title'>{title}</div>"
        </div>
        <div className='subTitle'>{subTitle}</div>
        <div className='timing'>{timing}</div>
        <div className='button-holder'>
          <button className='primary-button'>dub</button>
        </div>
      </div>
    )
  }
}

MeidaCard.defaultProps = {
  title: 'Because waiting for you because waiting for you because waiting for you',
  subTitle: 'Notting Hills',
  timing: '0.14 sec',
  img: 'https://picsum.photos/246/369/?random'
}
