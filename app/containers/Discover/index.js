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
  handleSelectVideoToDub,
  handleUserFavoriteVideo
} from '../../actions'
// ======================================================
// Asset
// ======================================================
import ContentDiscovers from '../../../content/discovers'

const mapStateToProps = state => {
  return {
    isUserLoggedIn: state.user.isLoggedIn
  }
}

const actionToProps = {
  onClickVideo: handleSelectVideoToDub,
  onClickFav: handleUserFavoriteVideo
}

@withRedux(mapStateToProps, actionToProps)
export default class extends React.Component {
  state = {
    isFetched: false
  }
  componentDidMount = () => {
    const { isFetched } = this.state
    // connect to firebase to get discover data
    if (!isFetched) {
      this.fetchData().then((data) => {
        console.log('fetchData', data)
        const entities = _.reduce(data, (result, discoverCategory) => {
          const discoverItems = _.reduce(discoverCategory.medias || [], (acc, media) => {
            return {
              ...acc,
              [media.slug || uuid()]: media
            }
          }, {})
          return {
            ...result,
            ...discoverItems
          }
        }, {})

        this.setState({
          entities,
          data,
          isFetched: true
        })
      })
    }
  }
  fetchData = () => {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
        resolve(ContentDiscovers)
      }, 1)
    })
  }
  handleClickMedia = ({ slug }) => {
    this.props.onClickVideo({ data: this.state.entities[slug] })
  }
  handleClickFav = ({ slug }) => {
    this.props.onClickFav({ slug })
  }
  render() {
    const { isUserLoggedIn } = this.props
    const { data, isFetched } = this.state
    console.log(this.state, this.props)
    return (
      <div className='dubtitlePage page-discover'>
        {
          isFetched === true &&
          <MediaSliderPanel
            data={data}
            canFav={isUserLoggedIn}
            onClick={this.handleClickMedia}
            onClickFav={this.handleClickFav}
          />
        }
        {
          !isFetched && <h1>Loading</h1>
        }
        <Footer />
      </div>
    )
  }
}
