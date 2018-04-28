import React from 'react'
import { Player, ControlBar } from 'video-react'
import MdFav from 'react-icons/lib/md/favorite'

export default class Video extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      isFav: false
    }
  }

  componentDidMount() {
  }

  handelFav = () => {
    const { isFav } = this.state
    this.setState({
      isFav: !isFav
    })
  }

  render () {
    const { source, img } = this.props
    const { isFav } = this.state
    // console.log('currVideo>', currVideo.ended)
    return (
      <Player
        poster={img}
        preload='metadata'
      >
        <source src={source} />
        <button className='favIcon' onClick={() => this.handelFav()} >
          <MdFav color={isFav ? '#b5322b' : 'rgba(255, 255, 255, 0.5)'} />
        </button>
        <ControlBar autoHide disableDefaultControls />
      </Player>
    )
  }
}

Video.defaultProps = {
  source: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
  img: 'https://picsum.photos/308/205/?movie'
}
