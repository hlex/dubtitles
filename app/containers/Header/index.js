import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import {
  Navigation,
  Icon
} from '../../components'

export default class Header extends PureComponent {
  render() {
    return (
      <header className='main-header'>
        <Navigation />
        <Icon.AppIcon />
      </header>
    )
  }
}
