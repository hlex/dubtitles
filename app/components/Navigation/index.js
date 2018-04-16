import React, { Component } from 'react'
import { NavLink } from 'react-router-dom'

import { openModal } from '../../hocs/connectModal'

export default class Navigation extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true
  }
  handleLogin = () => {
    openModal('authentication')
  }
  handleLogout = () => {
    this.props.onLogout()
  }
  render() {
    const { isLoggedIn } = this.props
    return (
      <nav>
        <ul className='navigation'>
          <li>
            <NavLink activeClassName='active' to='/discover'>
              discover
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/lessons'>
              lessons
            </NavLink>
          </li>
          <li>
            {
              isLoggedIn ? (
                <NavLink activeClassName='active' to='/profile'>
                  my profile
                </NavLink>
              ) : (
                <a onClick={this.handleLogin}>my profile</a>
              )
            }
          </li>
          {isLoggedIn ? (
            <li>
              <a onClick={this.handleLogout}>log out</a>
            </li>
          ) : (
            <li>
              <a onClick={this.handleLogin}>log in</a>
            </li>
          )}
        </ul>
      </nav>
    )
  }
}
