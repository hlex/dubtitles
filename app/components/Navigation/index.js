import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

export default class Navigation extends PureComponent {
  render() {
    return (
      <nav>
        <ul className='navigation'>
          <li>
            <NavLink activeClassName='active' exact to='/'>
              Home
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/page1'>
              Page1
            </NavLink>
          </li>
          <li>
            <NavLink activeClassName='active' to='/page2'>
              Page2
            </NavLink>
          </li>
        </ul>
      </nav>
    )
  }
}
