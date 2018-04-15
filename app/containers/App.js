import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import Helmet from 'react-helmet'

import Header from './Header'
import Footer from './Footer'

class App extends Component {
  render () {
    return (
      <React.Fragment>
        <Helmet title='React Redux boilerplate' />
        <Header />
        <div className='content'>
          {renderRoutes(this.props.route.routes)}
        </div>
        <div>
          <Footer />
        </div>
      </React.Fragment>
    )
  }
}

export default App
