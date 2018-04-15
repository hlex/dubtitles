import React, { Component } from 'react'
import { renderRoutes } from 'react-router-config'
import Helmet from 'react-helmet'
import Modal from 'react-modal-es'

import Header from './Header'
import Authentication from './Authentication'

import { connectModal } from '../hocs/connectModal'

@connectModal
class App extends Component {
  isHomePage = () => {
    const { location: { pathname } } = this.props
    return pathname === '/' || pathname === '/home'
  }
  render() {
    const isHomePage = this.isHomePage()
    return (
      <React.Fragment>
        <Helmet title='Dubtitles' />
        <Modal
          name='authentication'
          title=''
          zIndex='30'
          className='your-classname'
          overlayColor='rgba(0, 0, 0, 0.7)'
          center
          didOpen={() => null}
          willUnmount={() => null}
          willClose={() => null}
        >
          <Authentication />
        </Modal>
        {
          isHomePage === false && <Header />
        }
        <div className={`main-screen-content ${isHomePage && 'home'} `}>
          <div className='screen-content'>{renderRoutes(this.props.route.routes)}</div>
        </div>
      </React.Fragment>
    )
  }
}

export default App
