import React from 'react'
import _ from 'lodash'
import MdPlayCircleOutline from 'react-icons/lib/md/play-circle-outline'
import MdPause from 'react-icons/lib/md/pause-circle-outline'
import MdFav from 'react-icons/lib/md/favorite'

export default class Video extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFav: false,
      isPlay: false,
      currVideo: ''
    }
  }

  componentDidMount() {
    this.setState({
      currVideo: document.getElementById(this.props.videoID)
    })
  }

  // shouldComponentUpdate(nextProps, nextState) {
  //   return this.props !== nextProps ||
  //   this.state.currVideo !== nextState.currVideo ||
  //   this.state.isFav !== nextState.isFav ||
  //   this.state.isPlay !== nextState.isPlay
  // }

  handelFav = () => {
    const { isFav } = this.state
    this.setState({
      isFav: !isFav
    })
  }

  handlePlay = (videoID) => {
    const { currVideo } = this.state
    console.log('play currVideo', videoID, this.currVideo, currVideo)
    if (!_.isEmpty(currVideo)) {
      currVideo.play()
      this.setState({
        isPlay: true
      })
    }
  }
  handlePause = (videoID) => {
    const { currVideo } = this.state
    console.log('pause currVideo', videoID, this.currVideo, currVideo)
    if (!_.isEmpty(currVideo)) {
      currVideo.pause()
      currVideo.load()
      this.setState({
        isPlay: false
      })
    }
  }
  handelOnClick = (videoID) => {
    const { currVideo } = this.state
    const { isPlay } = this.state
    if (!_.isEmpty(currVideo)) {
      if (isPlay) {
        currVideo.pause()
        // currVideo.load()
        this.setState({
          isPlay: false
        })
      } else {
        currVideo.play()
        this.setState({
          isPlay: true
        })
      }
    }
  }
  render () {
    const { source, videoID, img } = this.props
    const { isFav, isPlay } = this.state
    // console.log('currVideo>', currVideo.ended)
    return (
      <div className='video-react'>
        <video
          id={videoID}
          preload='auto'
          poster={img}
          // onMouseOver={() => this.handlePlay(videoID)}
          // onMouseOut={() => this.handlePause(videoID)}
        >
          <source src={source} type='video/mp4' />
        </video>
        <button
          className='video-big-play-button'
          onClick={() => this.handelOnClick(videoID)}
        >
          { isPlay ? <MdPause /> : <MdPlayCircleOutline /> }
        </button>
        <button className='video-big-play-button favIcon' onClick={() => this.handelFav()} >
          <MdFav color={isFav ? '#b5322b' : 'rgba(255, 255, 255, 0.5)'} />
        </button>
      </div>
    )
  }
}

Video.defaultProps = {
  videoID: 'video1',
  src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
  img: 'https://picsum.photos/308/205/?movie'
}
