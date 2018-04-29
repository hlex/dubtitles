import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'
import { NavLink } from 'react-router-dom'

import IconFacebook from '../../images/fb.svg'
import IconTwitter from '../../images/twitter.svg'
import IconMail from '../../images/mail.svg'

export default class Footer extends PureComponent {
  render() {
    return (
      <footer className='main-footer'>
        <div className='container'>
          <nav>
            <ul className='navigation'>
              <li><NavLink exact to='/'>home</NavLink></li>
              <li><NavLink exact to='https://google.com'>more works</NavLink></li>
              <li><NavLink exact to='/contact'>contact</NavLink></li>
            </ul>
          </nav>
          <div className='copy-right-wrapper'>
            <p className='copy-right'>Copyright 2018 by Irene Indravudh</p>
            <div className='social-media'>
              <ul className='navigation'>
                <li><NavLink exact to='/'><img src={IconFacebook} alt='' /></NavLink></li>
                <li><NavLink exact to='/'><img src={IconMail} alt='' /></NavLink></li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    )
  }
}
