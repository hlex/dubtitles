import React, { Component } from 'react'
import { withRouter } from 'react-router'
import anime from 'animejs'
import { Navigation, AppLogo, PageTitle } from '../../components'

// ======================================================
// Hoc
// ======================================================
import { withRedux } from '../../hocs'
// ======================================================
// Action
// ======================================================
import { handleUserLogout, goToPage } from '../../actions'
// ======================================================
// Asset
// ======================================================

import firebase from '../../firebase'

const mapStateToProps = state => {
  return {
    user: state.user
  }
}

const actionToProps = {
  onClickLogo: goToPage,
  onUserLogout: handleUserLogout
}
@withRouter
@withRedux(mapStateToProps, actionToProps)
export default class Header extends Component {
  static defaultProps = {
    noBackground: false
  }
  componentDidMount = () => {
    setTimeout(() => {
      anime({
        targets: '.navigation.header li',
        translateY: 0,
        delay: 1000,
        duration: (el, i, l) => i * 1000
      })
      anime({
        targets: '.app-logo-wrapper',
        translateX: 0,
        easing: 'easeOutExpo',
        duration: 2000
      })
    }, 500)
  }
  getPageTitle = () => {
    const {
      location: { pathname }
    } = this.props
    if (/lessons/ig.test(pathname)) return 'lessons'
    switch (pathname) {
      case '/':
      case '/home':
        return ''
      case '/lessons':
        return 'lessons'
      case '/profile':
        return 'my profile'
      case '/discover':
        return 'discover'
      case '/about':
        return 'about'
      default:
        return ''
    }
  }
  isHome = () => {
    const {
      location: { pathname }
    } = this.props
    return pathname === '/' || pathname === '/home' || /dub/ig.test(pathname)
  }
  handleLogout = () => {
    firebase
      .auth()
      .signOut()
      .then(() => {
        // Sign-out successful.
        this.props.onUserLogout()
        alert('Logout successfully.')
      })
      .catch(error => {
        // An error happened.
        console.error(error)
      })
  }
  handleClickLogo = () => {
    this.props.onClickLogo('')
  }
  render = () => {
    const { user, noBackground } = this.props
    return (
      <header className={`main-header ${noBackground && 'no-background'}`}>
        <div className='container'>
          <Navigation
            isLoggedIn={user.isLoggedIn}
            onLogout={this.handleLogout}
          />
          <div className='app-logo-wrapper'>
            <AppLogo onClick={this.handleClickLogo} />
          </div>
        </div>
        {!this.isHome() && (
          <div className='page-title-container'>
            <div className='container'>
              <PageTitle title={this.getPageTitle()} />
            </div>
          </div>
        )}
      </header>
    )
  }
}
