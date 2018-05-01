import React from 'react'
import PropTypes from 'prop-types'
import { Player, ControlBar } from 'video-react'
import $ from 'jquery'

export default class Video extends React.Component {
  static PropTypes = {
    videoSrc: PropTypes.string.isRequired,
    posterSrc: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    videoSrc: '',
    posterSrc: 'https://picsum.photos/308/205/?movie',
    onClick: () => null
  }
  state = {
    isFav: false
  }
  componentDidMount() {
    $('.video-react').hover(hoverVideo, hideVideo)
    function hoverVideo(e) {
      $('video', this)
        .get(0)
        .play()
    }
    function hideVideo(e) {
      $('video', this)
        .get(0)
        .pause()
    }
  }
  handleClick = () => {
    this.refs.player.pause()
    this.refs.player.seek(0)
    this.props.onClick(this.props.source)
  }
  render() {
    const { videoSrc, posterSrc } = this.props
    return (
      <div onClick={this.handleClick} className='video-wrapper hideControlBar'>
        <Player
          ref='player'
          poster={posterSrc}
          preload='metadata'
          width={320}
          height={240}
        >
          <source src={videoSrc} />
          <ControlBar autoHide disableDefaultControls />
        </Player>
      </div>
    )
  }
}
