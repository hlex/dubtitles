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
  render() {
    const { onClickVideo } = this.props
    return (
      <div className='dubtitlePage page-discover'>
        <MediaSliderPanel onClick={onClickVideo} />
        <Footer />
      </div>
    )
  }
}
