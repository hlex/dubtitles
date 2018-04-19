import React from 'react'
import {
  Button
} from '../'
import Video from '../Video'

// <img src={img} />

export default class MeidaCard extends React.Component {
  render () {
    const { title, subTitle, timing, img, videoID, src } = this.props
    console.log('src', src)
    return (
      <div className='mediaCard'>
        <div className='video-holder'>
          <Video videoID={videoID} source={src} img={img} />
        </div>
        <div className='title' style={{ display: 'flex', 'flexDirection': 'row' }} >
          "<div className='title'>{title}</div>"
        </div>
        <div className='subTitle'>{subTitle}</div>
        <div className='timing'>{timing}</div>
        <div className='button-holder'>
          <Button
            primary
            name='dub'
          />
        </div>
      </div>
    )
  }
}

MeidaCard.defaultProps = {
  title: 'Because waiting for you because waiting for you because waiting for you',
  subTitle: 'Notting Hills',
  timing: '0.14 sec',
  img: 'https://picsum.photos/308/205/?random',
  src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
  videoID: 1
}
