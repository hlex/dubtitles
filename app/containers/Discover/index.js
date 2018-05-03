import React from 'react'
import _ from 'lodash'
import uuid from 'uuid'
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
  getDiscoverData,
  handleSelectVideoToDub,
  handleUserFavoriteVideo
} from '../../actions'
// ======================================================
// Asset
// ======================================================

const mapStateToProps = state => {
  return {
    userFavoriteList: state.user.favorites,
    isUserLoggedIn: state.user.isLoggedIn,
    isFetchedDiscoverData: state.entities.discovers.isFetched,
    groups: state.entities.discovers.rawData,
    entities: state.entities.discovers.data
  }
}

const actionToProps = {
  getDiscoverData,
  onClickVideo: handleSelectVideoToDub,
  onClickFav: handleUserFavoriteVideo
}

@withRedux(mapStateToProps, actionToProps)
export default class extends React.Component {
  componentDidMount = () => {
    window.scrollTo(0, 0)
    const { isFetchedDiscoverData, getDiscoverData } = this.props
    if (!isFetchedDiscoverData) {
      getDiscoverData()
    }
  }
  handleClickMedia = ({ slug }) => {
    this.props.onClickVideo({ data: this.props.entities[slug] })
  }
  handleClickFav = ({ slug, isFav }) => {
    this.props.onClickFav({ slug, isFav })
  }
  render() {
    const { groups, isFetchedDiscoverData, isUserLoggedIn, userFavoriteList } = this.props
    return (
      <div className='dubtitlePage page-discover'>
        {
          isFetchedDiscoverData === true &&
          <MediaSliderPanel
            groups={groups}
            favList={userFavoriteList}
            canFav={isUserLoggedIn}
            onClick={this.handleClickMedia}
            onClickFav={this.handleClickFav}
          />
        }
        {
          !isFetchedDiscoverData && <h1>Loading</h1>
        }
        <Footer />
      </div>
    )
  }
}
