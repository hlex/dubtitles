import React from 'react'
import _ from 'lodash'
import { bindFormValidation } from 'redux-form-manager'

import { InputField, Button } from '../../components'
import { withRedux } from '../../hocs'
import createForm from './createForm'
import firebase from '../../firebase'
import { closeModal } from '../../hocs/connectModal'

// ======================================================
// Action
// ======================================================
import { FORM_CHANGE } from '../../actions/actionTypes'
import { handleUserSignUpWithEmail, handleUserSignUpWithFacebook } from './actions'


const mapStateToProps = state => {
  return {
    email: state.domains.form.email,
    password: state.domains.form.password
  }
}

const actionToProps = {
  onUserSignUpWithEmail: handleUserSignUpWithEmail,
  onUserLoginWithFacebook: handleUserSignUpWithFacebook
}

const core = {
  actionType: FORM_CHANGE,
  formData: (state, props) => createForm(state),
  renderUIInputField: (fieldData, updateValue) => {
    return <InputField {...fieldData} onChange={updateValue} />
  }
}

const afterFieldChange = (dispatch, state) => {
  return {}
}

@withRedux(mapStateToProps, actionToProps)
@bindFormValidation(core, afterFieldChange)
export default class extends React.Component {
  state = {
    mode: 'signup'
  }
  createUserWithEmailAndPassword = async () => {
    const { email, password, onUserSignUpWithEmail } = this.props
    try {
      const user = await firebase.auth().createUserWithEmailAndPassword(email, password)
      console.log('createUserWithEmailAndPassword', user)
      onUserSignUpWithEmail(user)
    } catch (error) {
      // Handle Errors here.
      const errorCode = error.code
      const errorMessage = error.message
      // ...
      console.error(error, errorCode, errorMessage)
    }
  }
  signInWithEmailAndPassword = (email, password) =>
    firebase.auth().signInWithEmailAndPassword(email, password)
  // signInWithGoogle = () => {
  //   const provider = new firebase.auth.GoogleAuthProvider()
  //   return firebase.auth().signInWithPopup(provider)
  // }
  signInWithFacebook = () => {
    const provider = new firebase.auth.FacebookAuthProvider()
    return firebase.auth().signInWithPopup(provider)
  }
  signOut = () => firebase.auth().signOut()
  // // onAuthStateChanged = cb => firebase.auth().onAuthStateChanged(cb)
  // isAuthenticated = () => !!window.localStorage.getItem(storageKey)
  // getAuthenticatedUser = () =>
  //   JSON.parse(window.localStorage.getItem(storageKey))
  getTitle = () => (this.state.mode === 'login' ? 'Login' : 'Sign up')
  handleClickLogin = () => {
    this.handleChangeAuthenticationMode({ mode: 'login' })
  }
  handleClickSignup = () => {
    this.handleChangeAuthenticationMode({ mode: 'signup' })
  }
  handleChangeAuthenticationMode = ({ mode }) => {
    this.setState({
      mode
    })
  }
  handleDoLogin = () => {
    const { formData } = this.props
    const email = formData.email.value
    const password = formData.password.value
    this.signInWithEmailAndPassword(email, password)
      .then(response => {
        console.log('response', response)
        closeModal('authentication')
      })
      .catch(error => {
        console.error('error', error)
      })
  }
  handleDoLoginWithFacebook = () => {
    const { onUserLoginWithFacebook } = this.props
    this.signInWithFacebook().then((response) => {
      console.log('handleDoLoginWithFacebook', response)
      onUserLoginWithFacebook(response.user)
    })
  }
  renderFooter = () => {
    const { mode } = this.state
    const { firstError } = this.props
    if (mode === 'login') {
      return (
        <React.Fragment>
          <div className='_center'>
            <Button
              onClick={this.handleDoLogin}
              classified='secondary'
              name='Log in'
            />
          </div>
          <div className='_center'>
            <div style={{ margin: '10px 0 30px' }}>
              <small className='desc'>forgot your email or password</small>
            </div>
          </div>
          <div className='_center'>
            <a onClick={this.handleClickSignup} className='signupNow'>
              Sign up now
            </a>
            <small className='_vmiddle' style={{ margin: '0 15px' }}>
              or
            </small>
            <Button
              className='vmiddle'
              classified='facebook'
              name='Login with Facebook'
            />
          </div>
        </React.Fragment>
      )
    }
    return (
      <React.Fragment>
        <div className='_center'>
          <Button
            disabled={firstError !== ''}
            onClick={this.createUserWithEmailAndPassword}
            classified='tertiary'
            name='Sign up'
          />
        </div>
        <br />
        <div className='_center'>
          <Button
            onClick={this.handleClickLogin}
            classified='secondary'
            name='Log in'
          />
        </div>
        <div className='_center'>
          <p className='hr-text'>or</p>
        </div>
        <div className='_center'>
          <Button onClick={this.handleDoLoginWithFacebook} classified='facebook' name='Login with Facebook' />
        </div>
      </React.Fragment>
    )
  }

  render() {
    const { formData, renderInputField } = this.props
    return (
      <div className='authentication'>
        <div className='container'>
          <p className='title'>{this.getTitle()}</p>
          <div className='row columns-center'>
            <div className='D-6'>{renderInputField(formData.email)}</div>
          </div>
          <div className='row columns-center'>
            <div className='D-6'>{renderInputField(formData.password)}</div>
          </div>
          {this.renderFooter()}
        </div>
      </div>
    )
  }
}
