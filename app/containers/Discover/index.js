import React from 'react'
import _ from 'lodash'
// ======================================================
// Containers
// ======================================================
import Footer from '../Footer'
// ======================================================
// Components
// ======================================================
import {
  MediaSliderPanel
} from '../../components'
// ======================================================
// Hoc
// ======================================================
import { withRedux } from '../../hocs'
// ======================================================
// Action
// ======================================================
import {
  handleSelectVideoToDub
} from '../../actions'
// ======================================================
// Asset
// ======================================================

const mapStateToProps = state => {
  return {}
}

const actionToProps = {
  onClickVideo: handleSelectVideoToDub
}

@withRedux(mapStateToProps, actionToProps)
export default class extends React.Component {
  static defaultProps = {
    data: [
      {
        label: 'BEST QUOTES<br/>OF ALL TIME',
        subLabel: 'ประโยคยอดนิยมตลอดกาล',
        color: '#ff7547',
        medias: [
          {
            title: '"Ugh, As if"',
            subTitle: 'Clueless',
            timing: '5 sec.',
            img: 'https://res.cloudinary.com/dghqbnkcb/image/upload/v1525011999/discoverposter/Untitled-4-06.png',
            src: 'https://res.cloudinary.com/dghqbnkcb/video/upload/v1525029691/discoverposter/ugh.as_if.mp4',
            subtitle: {
              '0.0': 'Ew! Get off of me!',
              '2.3': '',
              '2.8': 'ugh! as if'
            }
          },
          {
            title: '"And If we burn, you burn with us"',
            subTitle: 'The Hunger Games : Mockingjay',
            timing: '16 sec.',
            img: 'https://res.cloudinary.com/dghqbnkcb/image/upload/v1525011996/discoverposter/Untitled-4-03.png',
            src: 'https://res.cloudinary.com/dghqbnkcb/video/upload/v1525028076/discovervideo/burn_with_us.mp4',
            subtitle: {
              '1.0': 'But do you see that?',
              '3.0': 'Fire is catching',
              '4.0': 'And If we burn, you burn with us.',
              '11.0': ''
            }
          },
          {
            title: 'You’re waiting for a train',
            subTitle: 'The Dark Knight',
            timing: '0.14 sec',
            img: 'https://picsum.photos/308/205/?random',
            src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
          },
          {
            title: 'You’re waiting for a train',
            subTitle: 'Notting Hills',
            timing: '0.14 sec',
            img: 'https://picsum.photos/308/205/?random',
            src: 'http://media.w3.org/2010/05/bunny/trailer.mp4'
          },
          {
            title: 'You’re waiting for a train',
            subTitle: 'The Dark Knight',
            timing: '0.14 sec',
            img: 'https://picsum.photos/308/205/?random',
            src: 'https://media.w3.org/2010/05/sintel/trailer_hd.mp4'
          }
        ]
      }
    ]
  }
  render() {
    const { data, onClickVideo } = this.props
    return (
      <div className='dubtitlePage page-discover'>
        <MediaSliderPanel data={data} onClick={onClickVideo} />
        <Footer />
      </div>
    )
  }
}
