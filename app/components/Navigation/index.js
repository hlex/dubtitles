import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default class Navigation extends Component {
  shouldComponentUpdate(nextProps, nextState, nextContext) {
    return true
  }
  render() {
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
            <NavLink activeClassName='active' to='/profile'>
              my profile
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/page2'>
              log in
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}
