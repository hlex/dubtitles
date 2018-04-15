import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import Helmet from 'react-helmet'

import Header from './Header'

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Helmet title='React Redux boilerplate' />
        <Header />
        <div className='main-content'>
          <div className='content'>
            {renderRoutes(this.props.route.routes)}
          </div>
        </div>
      </React.Fragment>
    )
  }
}

export default App
