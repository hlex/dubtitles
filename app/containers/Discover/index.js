import React from 'react'
// ======================================================
// Containers
// ======================================================
import Footer from '../Footer'
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
      <div className='page-discover'>
        <h1>Discover Page</h1>
        <Footer />
      </div>
    )
  }
}
