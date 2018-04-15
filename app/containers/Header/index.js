import React, { Component } from 'react'
import { withRouter } from 'react-router'
import {
  Navigation,
  AppLogo,
  PageTitle
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
@withRouter
@withRedux(mapStateToProps, actionToProps)
export default class Header extends Component {
  static defaultProps = {
    noBackground: false
  }
  isHome = () => {
    const { location: { pathname } } = this.props
    return pathname === '/' || pathname === '/home'
  }
  render = () => {
    const { noBackground } = this.props
    return (
      <header className={`main-header ${noBackground && 'no-background'}`}>
        <div className='container'>
          <Navigation />
          <div className='app-logo-wrapper'>
            <AppLogo />
          </div>
        </div>
        {
          !this.isHome() &&
          <div className='page-title-container'>
            <div className='container'>
              <PageTitle title='Discover' />
            </div>
          </div>
        }
      </header>
    )
  }
}
