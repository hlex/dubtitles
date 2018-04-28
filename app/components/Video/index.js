import React from 'react'
import { Player, ControlBar } from 'video-react'
import $ from 'jquery'

export default class Video extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFav: false
    }
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

  render() {
    const { source, img } = this.props
    return (
      <Player poster={img} preload='metadata'>
        <source src={source} />
        <ControlBar autoHide disableDefaultControls />
      </Player>
    )
  }
}

Video.defaultProps = {
  source: 'https://giant.gfycat.com/VerifiableTerrificHind.mp4',
  img: 'https://picsum.photos/308/205/?movie'
}
