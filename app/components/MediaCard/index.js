import React from 'react'
import MdFav from 'react-icons/lib/md/favorite'
import Video from '../Video'

export default class MeidaCard extends React.Component {
  state = {
    isFav: false
  }
  handelFav = () => {
    const { isFav } = this.state
    this.setState({
      isFav: !isFav
    })
  }
  render () {
    const { isFav } = this.state
    const { title, subTitle, timing, img, videoID, src, onClick } = this.props
    return (
      <div className='mediaCard'>
        <div className='video-holder'>
          <Video onClick={onClick} videoID={videoID} source={src} img={img} />
        </div>
        <div className='title' style={{ display: 'flex', 'flexDirection': 'row' }} >
          "<div className='title'>{title}</div>"
        </div>
        <div className='subTitle'>{subTitle}</div>
        <div className='timing'>{timing}</div>
        <button className='favIcon' onClick={() => this.handelFav()} >
          <MdFav className='icon' color={isFav ? '#fc481e' : '#fff'} />
        </button>
      </div>
    )
  }
}

/*
  <div className='button-holder'>
    <Button
      primary
      name='dub'
    />
  </div>
*/

MeidaCard.defaultProps = {
  title: 'Because waiting for you because waiting for you because waiting for you',
  subTitle: 'Notting Hills',
  timing: '0.14 sec',
  img: 'https://picsum.photos/308/205/?random',
  src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4',
  videoID: 1
}
