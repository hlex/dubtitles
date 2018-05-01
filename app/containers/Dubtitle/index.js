import React from 'react'
import {
  Player,
  ControlBar,
  PlayToggle,
  BigPlayButton,
  VolumeMenuButton,
  ProgressControl
} from 'video-react'
import RecordRTC, { StereoAudioRecorder } from 'recordrtc'
import captureVideoFrame from 'capture-video-frame'
// import $ from 'jquery'

import {
  Button,
  PlayButton,
  RecordButton,
  RecordVideoButton
} from '../../components'

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
    audioPlayer: null,
    currentTime: 0,
    isRecording: false,
    isPlaybackWithRecorded: false,
    recordVideo: null,
    recordedSrc: null
  }

  componentDidMount() {
    this.refs.dubtitlePlayer.subscribeToStateChange(this.handleStateChange.bind(this))
  }
  getIsPlayerPlaying = () => this.state.player.currentTime !== undefined
  captureUserMedia(callback) {
    var params = { audio: true, video: true }
    navigator.getUserMedia(params, callback, (error) => {
      alert(JSON.stringify(error)) // eslint-disable-line
    })
  };
  onVideoEnded = () => {
    const { isRecording, isPlaybackWithRecorded } = this.state
    // anytime video ended seek 0
    this.refs.dubtitlePlayer.seek(0)

    if (isPlaybackWithRecorded) {
      this.setState({
        isPlaybackWithRecorded: false
      })
    }
    // if not recording then do nothing.
    if (isRecording) {
      // stop recorded
      this.stopRecord((audio) => {
        // play recorded & video both
        this.refs.dubtitlePlayer.play()
        audio.play()
        this.setState({
          isPlaybackWithRecorded: true
        })
        // this.refs.dubtitlePlayer.play()
        // this.refs.dubtitleVideo.play()
      })
    }
  }
  handleStateChange(state, prevState) {
    // copy player state to this component's state
    const duration = Math.floor(state.duration)
    const currentTime = Math.floor(state.currentTime)
    if (this.state.currentTime !== currentTime) {
      this.setState({
        player: state,
        duration,
        currentTime
      })
    }
    const isEnded = state.duration === state.currentTime
    if (isEnded) this.onVideoEnded()
  }
  handleToggleRecord = () => {
    const { isRecording } = this.state
    if (isRecording) {
      // stop record
      this.stopRecord()
    } else {
      // start record
      this.startRecord()
    }
  }
  startRecord = (callback) => {
    this.setState({
      isRecording: true
    })
    // start capture webcam (record video)
    this.captureUserMedia((stream) => {
      // video option
      // const options = {
      //   mimeType: 'video/webm\;codecs=h264', // or video/webm\;codecs=h264 or video/webm\;codecs=vp9
      //   bitsPerSecond: 128000
      // }
      // audio option
      // const options = {
      //   recorderType: 'MediaStreamRecorder',
      //   mimeType: 'audio/webm' // Firefox also supports: "audio/ogg"
      // }
      var options = {
        recorderType: StereoAudioRecorder,
        mimeType: 'audio/wav'
      }
      console.log('----------- Start Record ---------')
      this.state.recordVideo = RecordRTC(stream, options)
      this.state.recordVideo.startRecording()
      // play videoPlayer along recording
      this.refs.dubtitlePlayer.play()
    })
  }
  stopRecord = (callback) => {
    this.setState({
      isRecording: false
    })
    this.state.recordVideo && this.state.recordVideo.stopRecording(() => {
      // const params = {
      //   type: 'video/webm',
      //   data: this.state.recordVideo.blob
      // }
      // create Audio
      console.log('----------- Stop Record ---------')
      console.log('----------- Create Audio URL ---------')
      const blobURL = window.URL.createObjectURL(this.state.recordVideo.blob)
      const audio = new Audio(blobURL)
      if (callback) callback(audio)
      // this.setState({
      //   recordedSrc: new Audio(this.state.recordVideo.blob), // window.URL.createObjectURL(this.state.recordVideo.blob),
      //   userMuted: false,
      //   recording: false,
      //   cover: captureVideoFrame('userPlayer', 'jpeg')
      // })
    })
  }
  render() {
    const { isRecording, isPlaybackWithRecorded } = this.state
    const { src } = this.props
    const mutedPlayer = isRecording || isPlaybackWithRecorded
    // console.log(this.state)
    return (
      <div className='dubtitle'>
        <Player
          muted={mutedPlayer}
          ref='dubtitlePlayer'
          width={960}
          height={540}
          name='dubtitleVideo'
          poster={'http://via.placeholder.com/960x540'}
          preload='auto'
          aspectRatio='16:9'
        >
          <source src={src} />
          <ControlBar
            autoHide={false}
            className='dubtitleCustomVideoControlBar'
            disableDefaultControls
          >
            <RecordButton
              onClick={this.handleToggleRecord}
              isRecording={isRecording}
              order={0}
            />
            <PlayToggle disabled={isRecording} order={1} />
            <ProgressControl order={2} />
            <RecordVideoButton order={3} />
          </ControlBar>
        </Player>
        <div className='helperPanel'>
          <h4 className='translate'>: หากคุณเก่งอะไร จงอย่าทำมันให้ใครฟรี ๆ</h4>
          <h4 className='tip'>good at เป็นเหมือนสำนวนแปลว่า เก่ง, เชี่ยวชาญ, มีความสามารถ รูปประโยคใช้ V. to be + good at + N/Ving </h4>
        </div>
      </div>
    )
  }
}

/*
  <Player
    ref='userFrame'
    width={240}
    height={135}
    name='dubtitleVideo'
    poster={recordedSrc}
    preload='auto'
    aspectRatio='16:9'
  >
    <ControlBar autoHide disableDefaultControls />
  </Player>
*/