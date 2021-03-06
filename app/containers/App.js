import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import Helmet from 'react-helmet'
import Modal from 'react-modal-es'
import _ from 'lodash'

import Header from './Header'
import Authentication from './Authentication'
import Dubtitle from './Dubtitle'
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
    // firebase
    //   .auth()
    //   .onAuthStateChanged()
    //   .then(user => {
    //     console.log('onAuthStateChanged', user)
    //     if (user) {
    //       onUserStillLoggedIn(user)
    //       //   // Write User (without Info) to localStorage first, so user is marked as 'loggedIn'
    //       //   window.localStorage.setItem(storageKey, JSON.stringify(user.toJSON()));

    //       //   const userWithInfo = await firebase.firestore()
    //       //     .collection('iam_users').doc(user.uid).get()
    //       //     .then(doc => ({ ...user.toJSON(), ...doc.data() }));

    //       //   // When userInfo return, rewrite to add `userInfo` to user object
    //       //   window.localStorage.setItem(storageKey, JSON.stringify(userWithInfo));
    //       // } else {
    //       //   typeof unregister === 'function' && unregister();
    //       //   window.localStorage.removeItem(storageKey);
    //     }
    //   })
  }
  componentDidMount = () => {
    const {
      location: { pathname }
    } = this.props
    const isViewSub = regexIsViewSub.test(pathname)
    console.log('isViewSub', isViewSub)
    if (isViewSub) {
      setTimeout(() => {
        openModal('dubtitle')
      }, 2000)
    }
  }
  isHomePage = () => {
    const {
      location: { pathname }
    } = this.props
    return pathname === '/' || pathname === '/home' || /dub/ig.test(pathname)
  }
  render() {
    const isHomePage = this.isHomePage()
    return (
      <React.Fragment>
        <Helmet title='Dubtitles' />
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
