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
// ======================================================
// Asset
// ======================================================

const mapStateToProps = state => {
  return {}
}

const actionToProps = {}

@withRedux(mapStateToProps, actionToProps)
export default class extends React.Component {
  render() {
    return (
      <div className='dubtitlePage page-discover'>
        <MediaSliderPanel />
        <MediaSliderPanel />
        <MediaSliderPanel />
        <Footer />
      </div>
    )
  }
}
