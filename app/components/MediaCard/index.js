import React from 'react'
import MdFav from 'react-icons/lib/md/favorite'
import Video from '../Video'

export default class MediaCard extends React.Component {
  static defaultProps = {
    title:
      'Because waiting for you because waiting for you because waiting for you',
    subtitle: 'Notting Hills',
    timing: '0.14 sec',
    posterSrc: 'https://picsum.photos/308/205/?random',
    videoSrc: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    videoID: 1
  }
  state = {
    isFav: false
  }
  handelFav = () => {
    const { isFav } = this.state
    this.setState({
      isFav: !isFav
    })
  }
  render() {
    const { isFav } = this.state
    const { title, subtitle, timing, posterSrc, videoID, videoSrc, onClick } = this.props
    return (
      <div className='mediaCard'>
        <div className='video-holder'>
          <Video
            onClick={onClick}
            videoID={videoID}
            videoSrc={videoSrc}
            posterSrc={posterSrc}
          />
        </div>
        <div
          className='title'
          style={{ display: 'flex', flexDirection: 'row' }}
        >
          <div className='title'>{title}</div>
        </div>
        <div className='subTitle'>{subtitle}</div>
        <div className='timing'>{timing}</div>
        <button className='favIcon' onClick={() => this.handelFav()}>
          <MdFav className='icon' color={isFav ? '#fc481e' : '#fff'} />
        </button>
      </div>
    )
  }
}
