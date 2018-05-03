import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import Helmet from 'react-helmet'
import Modal from 'react-modal-es'
import _ from 'lodash'
import anime from 'animejs'

import Header from './Header'
import Authentication from './Authentication'
import Dubtitle from './Dubtitle'

import { AppLogo } from '../components'

// ======================================================
// Action
// ======================================================
import { userLogin } from '../actions'
// ======================================================
// Hoc
// ======================================================
import { openModal, connectModal } from '../hocs/connectModal'

import { withRedux } from '../hocs'
import firebase from '../firebase'

const regexIsViewSub = /dub/ig

const mapStateToProps = state => {
  return {
    email: state.domains.form.email,
    password: state.domains.form.password
  }
}

const actionToProps = {
  onUserStillLoggedIn: userLogin
}
@connectModal
@withRedux(mapStateToProps, actionToProps)
class App extends Component {
  state = {
    loaded: false
  }
  componentWillMount = () => {
    const { onUserStillLoggedIn } = this.props
    firebase.auth().onAuthStateChanged((user) => {
      console.log('onAuthStateChanged', user)
      if (user) {
        // User is signed in.
        const appUser = {
          email: _.get(user, 'email'),
          displayName: _.get(user, 'displayName'),
          profileImage: _.get(user, 'providerData.0.photoURL')
        }
        onUserStillLoggedIn(appUser)
      } else {
        // No user is signed in.
      }
    })
  }
  componentDidMount = () => {
    const {
      location: { pathname }
    } = this.props
    const isViewSub = regexIsViewSub.test(pathname)
    setTimeout(() => {
      this.setState({
        loaded: true
      })
      const timeline = anime.timeline()
      timeline.add({
        targets: '.iconLoading',
        translateY: 30,
        delay: 2000,
        duration: 1000
      })
      timeline.add({
        targets: '.iconLoading',
        translateY: -1000,
        duration: 1000
      })
      timeline.add({
        targets: '.appLoading',
        opacity: 0,
        zIndex: {
          value: [99999, -1],
          round: true
        },
        duration: 2000
      })
    }, 500)
    if (isViewSub) {
      setTimeout(() => {
        openModal('dubtitle')
      }, 5000)
    }
  }
  isHomePage = () => {
    const {
      location: { pathname }
    } = this.props
    return pathname === '/' || pathname === '/home' || /dub/ig.test(pathname)
  }
  render() {
    const { loaded } = this.state
    const isHomePage = this.isHomePage()
    return (
      <React.Fragment>
        <Helmet title='Dubtitles' />
        <div className={`appLoading ${loaded ? 'loaded' : ''}`}>
          <AppLogo className='iconLoading' />
        </div>
        <Modal
          name='authentication'
          title=''
          zIndex='30'
          className='your-classname'
          overlayColor='rgba(0, 0, 0, 0.7)'
          center
          didOpen={() => null}
          willUnmount={() => null}
          willClose={() => null}
        >
          <Authentication />
        </Modal>
        <Modal
          name='dubtitle'
          title=''
          zIndex='30'
          className='dubtitleWorkspace'
          overlayColor='rgba(0, 0, 0, 0.7)'
          center
          didOpen={() => null}
          willUnmount={() => null}
          willClose={() => null}
        >
          <Dubtitle />
        </Modal>
        {isHomePage === false && <Header />}
        <div className={`main-screen-content ${isHomePage && 'home'} `}>
          <div className='screen-content'>
            {renderRoutes(this.props.route.routes)}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App
