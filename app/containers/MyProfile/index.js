import React from 'react'
import _ from 'lodash'
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
import {
  getDiscoverData,
  handleSelectVideoToDub,
  handleUserFavoriteVideo
} from '../../actions'
// ======================================================
// Asset
// ======================================================

const mapStateToProps = state => {
  const userFavoriteListArray = _.keys(state.user.favorites)
  const discoverEntities = state.entities.discovers.data
  return {
    user: state.user,
    myFavorites: {
      label: 'FAVORITES',
      color: '#ff7547',
      medias: _.map(_.pick(discoverEntities, userFavoriteListArray))
    },
    myDubs: {
      label: 'MY DUBS',
      color: '#ff7547',
      medias: []
    },
    isFetchedDiscoverData: state.entities.discovers.isFetched
  }
}

const actionToProps = {
  getDiscoverData,
  onClickVideo: handleSelectVideoToDub,
  onClickFav: handleUserFavoriteVideo
}

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
  componentDidMount = () => {
    const { isFetchedDiscoverData, getDiscoverData } = this.props
    if (!isFetchedDiscoverData) {
      getDiscoverData()
    }
  }
  getNumberOfFavorite = () => this.props.myFavorites.medias.length
  getNumberOfDub = () => this.props.myDubs.medias.length
  getGroup = () => {
    const { myFavorites, myDubs } = this.props
    let groups = []
    if (this.getNumberOfFavorite() > 0) groups.push(myFavorites)
    if (this.getNumberOfDub() > 0) groups.push(myDubs)
    return groups
  }
  handleClickMedia = ({ slug }) => {
    this.props.onClickVideo({ data: this.props.entities[slug] })
  }
  handleClickFav = ({ slug, isFav }) => {
    this.props.onClickFav({ slug, isFav })
  }
  render() {
    const { user } = this.props
    const { isUserLoggedIn, favorites } = user
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
                      <h4>my dub</h4><span className='semicolon'>:</span><div className='text-in-circle'>{this.getNumberOfDub()}</div>
                    </div>
                    <div className='item'>
                      <h4>favorites</h4><span className='semicolon'>:</span><div className='text-in-circle'>{this.getNumberOfFavorite()}</div>
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
        </div>
        <MediaSliderPanel
          groups={this.getGroup()}
          favList={favorites}
          canFav={isUserLoggedIn}
          onClick={this.handleClickMedia}
          onClickFav={this.handleClickFav}
        />
        <Footer />
      </div>
    )
  }
}
