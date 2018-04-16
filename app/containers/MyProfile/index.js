import React from 'react'
// ======================================================
// Containers
// ======================================================
import Footer from '../Footer'
// ======================================================
// Components
// ======================================================
import { MediaSliderPanel } from '../../components'
// ======================================================
// Hoc
// ======================================================
import { withRedux } from '../../hocs'
// ======================================================
// Action
// ======================================================
// ======================================================
// Asset
// ======================================================

const mapStateToProps = state => {
  return {}
}

const actionToProps = {}

@withRedux(mapStateToProps, actionToProps)
export default class extends React.Component {
  static defaultProps = {
    favorites: [
      {
        label: 'FAVORITES',
        subLabel: '',
        color: '#ff7547',
        medias: [
          {
            title: '“I’m also just a girl…”',
            subTitle: 'Notting Hills',
            timing: '0.14 sec',
            img: 'http://via.placeholder.com/246x369'
          },
          {
            title: 'You’re waiting for a train',
            subTitle: 'The Dark Knight',
            timing: '0.14 sec',
            img: 'http://via.placeholder.com/246x369'
          },
          {
            title: 'You’re waiting for a train',
            subTitle: 'The Dark Knight',
            timing: '0.14 sec',
            img: 'http://via.placeholder.com/246x369'
          },
          {
            title: 'You’re waiting for a train',
            subTitle: 'The Dark Knight',
            timing: '0.14 sec',
            img: 'http://via.placeholder.com/246x369'
          },
          {
            title: 'You’re waiting for a train',
            subTitle: 'The Dark Knight',
            timing: '0.14 sec',
            img: 'http://via.placeholder.com/246x369'
          },
          {
            title: 'You’re waiting for a train',
            subTitle: 'The Dark Knight',
            timing: '0.14 sec',
            img: 'http://via.placeholder.com/246x369'
          },
          {
            title: 'You’re waiting for a train',
            subTitle: 'The Dark Knight',
            timing: '0.14 sec',
            img: 'http://via.placeholder.com/246x369'
          }
        ]
      }
    ],
    dubs: [
      {
        label: 'MY DUBS',
        subLabel: '',
        color: '#ff7547',
        medias: [
          {
            title: '“I’m also just a girl…”',
            subTitle: 'Notting Hills',
            timing: '0.14 sec',
            img: 'http://via.placeholder.com/246x369'
          },
          {
            title: 'You’re waiting for a train',
            subTitle: 'The Dark Knight',
            timing: '0.14 sec',
            img: 'http://via.placeholder.com/246x369'
          },
          {
            title: 'You’re waiting for a train',
            subTitle: 'The Dark Knight',
            timing: '0.14 sec',
            img: 'http://via.placeholder.com/246x369'
          },
          {
            title: 'You’re waiting for a train',
            subTitle: 'The Dark Knight',
            timing: '0.14 sec',
            img: 'http://via.placeholder.com/246x369'
          },
          {
            title: 'You’re waiting for a train',
            subTitle: 'The Dark Knight',
            timing: '0.14 sec',
            img: 'http://via.placeholder.com/246x369'
          },
          {
            title: 'You’re waiting for a train',
            subTitle: 'The Dark Knight',
            timing: '0.14 sec',
            img: 'http://via.placeholder.com/246x369'
          },
          {
            title: 'You’re waiting for a train',
            subTitle: 'The Dark Knight',
            timing: '0.14 sec',
            img: 'http://via.placeholder.com/246x369'
          }
        ]
      }
    ]
  }
  render() {
    const { favorites, dubs } = this.props
    return (
      <div className='page-myProfile'>
        <div className='container'>
          <div className='profile-panel'>
            <div className='title'>
              <span className='greeting'>Hello</span>,{' '}
              <span className='name'>Irene Indravudh</span>
            </div>
            <div className='panel'>
              <div className='profile-image-cropper'>
                <img className='' src='http://via.placeholder.com/250x250' />
              </div>
              <div className='summary'>
                <div className='item'>
                  <h4>my dub</h4><span className='semicolon'>:</span><div className='text-in-circle'>2</div>
                </div>
                <div className='item'>
                  <h4>favorites</h4><span className='semicolon'>:</span><div className='text-in-circle'>3</div>
                </div>
              </div>
            </div>
          </div>
          <MediaSliderPanel data={favorites} />
          <MediaSliderPanel data={dubs} />
          <Footer />
        </div>
      </div>
    )
  }
}
