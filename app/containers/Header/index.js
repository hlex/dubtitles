import React, { Component } from 'react'
import PropTypes from 'prop-types'

import {
  Navigation,
  AppLogo,
  PageTitle
} from '../../components'

export default class Header extends Component {
  render() {
    return (
      <header className='main-header'>
        <div className='container'>
          <Navigation />
          <div className='app-logo-wrapper'>
            <AppLogo />
          </div>
        </div>
        <div className='page-title-container'>
          <div className='container'>
            <PageTitle title='Discover' />
          </div>
        </div>
      </header>
    )
  }
}
