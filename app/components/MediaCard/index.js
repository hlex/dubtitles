import React from 'react'
import MdFav from 'react-icons/lib/md/favorite'
import Video from '../Video'

import iconDownload from '../../images/download.svg'

export default class MediaCard extends React.Component {
  static defaultProps = {
    canDownload: false,
    title:
      'Because waiting for you because waiting for you because waiting for you',
    subtitle: 'Notting Hills',
    timing: '0.14 sec',
    posterSrc: 'https://picsum.photos/308/205/?random',
    videoSrc: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
    videoID: 1,
    isFav: false,
    canFav: true,
    onClickFav: () => null
  }
  state = {
    isFav: this.props.isFav
  }
  componentWillReceiveProps = (nextProps) => {
    if (this.props.isFav !== nextProps.isFav || this.props.videoID !== nextProps.videoID) {
      this.setState({
        isFav: nextProps.isFav
      })
    }
  }
  handelFav = () => {
    const { isFav } = this.state
    const nextFavState = !isFav
    this.setState({
      isFav: nextFavState
    })
    this.props.onClickFav(nextFavState)
  }
  render() {
    const { isFav } = this.state
    const { dubSrc, title, subtitle, timing, posterSrc, videoID, videoSrc, onClick, canFav, canDownload, dubList } = this.props
    console.log()
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
          onClick={onClick}
          className='title'
          style={{ display: 'flex', flexDirection: 'row' }}
        >
          <div className='title'>{title}</div>
        </div>
        <div className='subTitle'>{subtitle}</div>
        <div className='timing'>{timing}</div>
        {
          canFav && !canDownload &&
          <button className='favIcon' onClick={() => this.handelFav()}>
            <MdFav className='icon' color={isFav ? '#fc481e' : '#fff'} />
          </button>
        }
        {
          canDownload &&
          <button className='favIcon' onClick={() => this.handelFav()}>
            <a href={dubSrc} download><img className='iconDownload' src={iconDownload} /></a>
          </button>
        }
      </div>
    )
  }
}
