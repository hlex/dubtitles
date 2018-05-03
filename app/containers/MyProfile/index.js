import React from 'react'
import _ from 'lodash'
import { animateScroll as scroll } from 'react-scroll'
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
  handleUserFavoriteVideo,
  handleClickViewMyDub
} from '../../actions'
// ======================================================
// Asset
// ======================================================
import popcornBag from '../../images/popcorn_bag.svg'

const mapStateToProps = state => {
  const userFavoriteListArray = _.keys(state.user.favorites)
  const userDubListArray = _.keys(state.user.dubs)
  const discoverEntities = state.entities.discovers.data
  return {
    user: state.user,
    discoverEntities: discoverEntities,
    myFavorites: {
      label: 'FAVORITES',
      color: '#ff7547',
      medias: _.map(_.pick(discoverEntities, userFavoriteListArray))
    },
    myDubs: {
      label: 'MY DUBS',
      color: '#ff7547',
      canDownload: true,
      medias: _.map(_.pick(discoverEntities, userDubListArray))
    },
    isFetchedDiscoverData: state.entities.discovers.isFetched
  }
}

const actionToProps = {
  getDiscoverData,
  onClickVideo: handleSelectVideoToDub,
  onClickFav: handleUserFavoriteVideo,
  onClickViewMyDub: handleClickViewMyDub
}

@withRedux(mapStateToProps, actionToProps)
export default class extends React.Component {
  componentDidMount = () => {
    setTimeout(() => {
      scroll.scrollToTop()
    }, 1000)
    const { isFetchedDiscoverData, getDiscoverData } = this.props
    if (!isFetchedDiscoverData) {
      getDiscoverData()
    }
  }
  getNumberOfFavorite = () => this.props.myFavorites.medias.length
  getNumberOfDub = () => this.props.myDubs.medias.length
  handleClickViewMyDub = ({ slug }) => {
    this.props.onClickViewMyDub({ data: this.props.discoverEntities[slug], slug })
  }
  handleClickMedia = ({ slug }) => {
    this.props.onClickVideo({ data: this.props.discoverEntities[slug] })
  }
  handleClickFav = ({ slug, isFav }) => {
    this.props.onClickFav({ slug, isFav })
  }
  render() {
    const { user, myDubs, myFavorites } = this.props
    const { isUserLoggedIn, favorites, dubs } = user
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
        {
          this.getNumberOfFavorite() > 0 &&
          <div style={{ position: 'relative' }}>
            <img id='profilePopcorn' src={popcornBag} />
            <MediaSliderPanel
              groups={[myFavorites]}
              favList={favorites}
              canFav={isUserLoggedIn}
              onClick={this.handleClickMedia}
              onClickFav={this.handleClickFav}
            />
          </div>
        }
        {
          this.getNumberOfDub() > 0 &&
          <MediaSliderPanel
            groups={[myDubs]}
            favList={favorites}
            dubList={dubs}
            canFav={false}
            onClick={this.handleClickViewMyDub}
          />
        }
        <Footer />
      </div>
    )
  }
}
