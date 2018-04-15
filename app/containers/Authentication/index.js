import React from 'react'

import {
  Button
} from '../../components'

export default class extends React.Component {
  state = {
    mode: 'login'
  }
  render() {
    return (
      <div>
        <div>
          <input type='email' />
          <input type='text' />
          <input type='password' />
        </div>
        <Button full classified='secondary' name='Log in' />
        <p>or</p>
        <Button full classified='facebook-login' name='Login with Facebook' />
      </div>
    )
  }
}
