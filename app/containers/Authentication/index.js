import React from 'react'
import { bindFormValidation } from 'redux-form-manager'

import { FORM_CHANGE } from '../../actions/actionTypes'
import { InputField, Button } from '../../components'
import { withRedux } from '../../hocs'
import createForm from './createForm'

const mapStateToProps = state => {
  return {}
}

const actionToProps = {}

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
  renderFooter = () => {
    const { mode } = this.state
    if (mode === 'login') {
      return (
        <React.Fragment>
          <div className='_center'>
            <Button
              onClick={this.handleClickLogin}
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
            <a onClick={this.handleClickSignup} className='signupNow'>Sign up now</a>
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
            onClick={this.handleClickLogin}
            classified='secondary'
            name='Log in'
          />
        </div>
        <div className='_center'>
          <p className='hr-text'>or</p>
        </div>
        <div className='_center'>
          <Button classified='facebook' name='Login with Facebook' />
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
