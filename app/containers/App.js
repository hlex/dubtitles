import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import Helmet from 'react-helmet'
import Modal from 'react-modal-es'

import Header from './Header'
import Authentication from './Authentication'
// ======================================================
// Action
// ======================================================
import { userLogin } from '../actions'
// ======================================================
// Hoc
// ======================================================
import { connectModal } from '../hocs/connectModal'
import { withRedux } from '../hocs'

import firebase from '../firebase'

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
    firebase.auth().onAuthStateChanged(async user => {
      console.log('onAuthStateChanged', user)
      if (user) {
        onUserStillLoggedIn(user)
      //   // Write User (without Info) to localStorage first, so user is marked as 'loggedIn'
      //   window.localStorage.setItem(storageKey, JSON.stringify(user.toJSON()));

      //   const userWithInfo = await firebase.firestore()
      //     .collection('iam_users').doc(user.uid).get()
      //     .then(doc => ({ ...user.toJSON(), ...doc.data() }));

      //   // When userInfo return, rewrite to add `userInfo` to user object
      //   window.localStorage.setItem(storageKey, JSON.stringify(userWithInfo));
      // } else {
      //   typeof unregister === 'function' && unregister();
      //   window.localStorage.removeItem(storageKey);
      }
    })
  }
  isHomePage = () => {
    const {
      location: { pathname }
    } = this.props
    return pathname === '/' || pathname === '/home'
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
