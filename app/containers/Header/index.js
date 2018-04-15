import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

import {
  Navigation
} from '../../components'

export default class Header extends PureComponent {
  render() {
    return (
      <header className='main-header'>
        <Navigation />
      </header>
    )
  }
}
