import React from 'react'
// ======================================================
// Containers
// ======================================================
import Footer from '../Footer'
import Authentication from '../Authentication'
// ======================================================
// Components
// ======================================================
import { Card, MediaSliderPanel } from '../../components'
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
  return {
    user: state.user,
    favorites: {
      label: 'FAVORITES',
      subLabel: '',
      color: '#ff7547',
      medias: []
    },
    dubs: {
      label: 'MY DUBS',
      subLabel: '',
      color: '#ff7547',
      medias: []
    }
  }
}

const actionToProps = {}

@withRedux(mapStateToProps, actionToProps)
export default class extends React.Component {
  static defaultProps = {
    user: {
      displayName: 'Irene Indravudh',
      profileImage: 'http://cdn02.cdn.justjaredjr.com/wp-content/uploads/headlines/2017/07/hp-jk-rowling-birthday-tweets.jpg'
    },
    favorites: {
      label: 'FAVORITES',
      subLabel: '',
      color: '#ff7547',
      medias: [
        {
          title: '“I’m also just a girl…”',
          subTitle: 'Notting Hills',
          timing: '0.14 sec',
          img: 'http://media.w3.org/2010/05/bunny/trailer.mp4'
        },
        {
          title: '“I’m also just a girl…”',
          subTitle: 'Notting Hills',
          timing: '0.14 sec',
          img: 'http://media.w3.org/2010/05/bunny/trailer.mp4'
        }
      ]
    },
    dubs: {
      label: 'MY DUBS',
      subLabel: '',
      color: '#ff7547',
      medias: [
        {
          title: '“I’m also just a girl…”',
          subTitle: 'Notting Hills',
          timing: '0.14 sec',
          img: 'http://via.placeholder.com/246x369'
        }
      ]
    }
  }
  render() {
    const { user, favorites, dubs } = this.props
    console.log(this)
    return (
      <div className='page-myProfile'>
        <div className='container'>
          {
            user.isFetched === false && <div style={{ height: '500px', color: '#fff', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>Loading...</div>
          }
          {
            user.isFetched &&
            <div className='profile-panel'>
              <div className='title'>
                <span className='greeting'>Hello</span>,{' '}
                <span className='name'>{user.displayName || 'Guest'}</span>
              </div>
              {
                user.isLoggedIn &&
                <div className='panel'>
                  <div className='profile-image-cropper'>
                    <img className='' src={user.profileImage} />
                  </div>
                  <div className='summary'>
                    <div className='item'>
                      <h4>my dub</h4><span className='semicolon'>:</span><div className='text-in-circle'>{dubs.medias.length}</div>
                    </div>
                    <div className='item'>
                      <h4>favorites</h4><span className='semicolon'>:</span><div className='text-in-circle'>{favorites.medias.length}</div>
                    </div>
                  </div>
                </div>
              }
              {
                user.isLoggedIn === false &&
                <Card>
                  <Authentication />
                </Card>
              }
            </div>
          }
          { favorites.length > 0 && <MediaSliderPanel data={[favorites]} /> }
          { dubs.length > 0 && <MediaSliderPanel data={[dubs]} /> }
          <Footer />
        </div>
      </div>
    )
  }
}
