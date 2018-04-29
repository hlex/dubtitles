import React from 'react'
import { Player, ControlBar } from 'video-react'
// import $ from 'jquery'

import { Button, DownloadButton } from '../../components'

// import { bindFormValidation } from 'redux-form-manager'

// import { InputField, Button } from '../../components'
import { withRedux } from '../../hocs'
// import createForm from './createForm'
// import firebase from '../../firebase'
// import { closeModal } from '../../hocs/connectModal'

// ======================================================
// Action
// ======================================================
// import { FORM_CHANGE } from '../../actions/actionTypes'
// import { handleUserSignUpWithEmail } from './actions'

const mapStateToProps = state => {
  const { src } = state.domains.dubtitle
  return {
    src
  }
}

const actionToProps = {
}

@withRedux(mapStateToProps, actionToProps)
export default class extends React.Component {
  state = {
    player: {},
    currentTime: 0
  }
  componentDidMount() {
    this.refs.dubtitlePlayer.subscribeToStateChange(this.handleStateChange.bind(this))
  }
  handleStateChange(state, prevState) {
    // copy player state to this component's state
    const currentTime = Math.floor(state.currentTime)
    if (this.state.currentTime !== currentTime) {
      this.setState({
        player: state,
        duration: Math.floor(state.duration),
        currentTime
      })
    }
  }
  render() {
    const { src } = this.props
    console.log(this.state)
    return (
      <div className='dubtitle'>
        <Player
          ref='dubtitlePlayer'
          width='960'
          height='540'
          name='dubtitleVideo'
          poster={'http://via.placeholder.com/960x540'}
          preload='auto'
          aspectRatio='16:9'
        >
          <source src={src} />
          <div className='dubtitleControl'>
            <Button>Hello</Button>
            <Button>Hello</Button>
            <Button>Hello</Button>
          </div>
        </Player>
        <div className='helper-panel'>
          <h4 className='translate'>: หากคุณเก่งอะไร จงอย่าทำมันให้ใครฟรี ๆ</h4>
          <h4 className='tip'>good at เป็นเหมือนสำนวนแปลว่า เก่ง, เชี่ยวชาญ, มีความสามารถ รูปประโยคใช้ V. to be + good at + N/Ving </h4>
        </div>
      </div>
    )
  }
}
