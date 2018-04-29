import React from 'react'
import PropTypes from 'prop-types'
import { Player, ControlBar } from 'video-react'
import $ from 'jquery'

export default class Video extends React.Component {
  static PropTypes = {
    source: PropTypes.string.isRequired,
    img: PropTypes.string,
    onClick: PropTypes.func
  }

  static defaultProps = {
    img: 'https://picsum.photos/308/205/?movie',
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
    this.props.onClick(this.props.source)
  }
  render() {
    const { source, img } = this.props
    return (
      <div onClick={this.handleClick} className='video-wrapper hideControlBar'>
        <Player poster={img} preload='metadata'>
          <source src={source} />
          <ControlBar autoHide disableDefaultControls />
        </Player>
      </div>
    )
  }
}
