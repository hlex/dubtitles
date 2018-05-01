import React from 'react'
import _ from 'lodash'
import {
  Player,
  ControlBar,
  PlayToggle,
  BigPlayButton,
  VolumeMenuButton,
  CurrentTimeDisplay,
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

const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia || navigator.msGetUserMedia);

const mapStateToProps = state => {
  return {
    ...state.domains.dubtitle
  }
}

const actionToProps = {
}

@withRedux(mapStateToProps, actionToProps)
export default class extends React.Component {
  static defaultProps = {
    title: '"Ugh, As if"',
    movieName: 'Clueless',
    timing: '5 sec.',
    posterSrc: 'https://res.cloudinary.com/dghqbnkcb/image/upload/v1525011999/discoverposter/Untitled-4-06.png',
    videoSrc: 'https://res.cloudinary.com/dghqbnkcb/video/upload/v1525029691/discoverposter/ugh.as_if.mp4',
    subtitle: {
      '0.0': 'Ew! Get off of me!',
      '2.3': '',
      '2.8': 'ugh! as if'
    }
  }
  state = {
    player: {},
    audioPlayer: null,
    subtitle: '',
    currentTime: 0,
    isVideoPlaying: false,
    isRecording: false,
    isPlaybackWithRecorded: false,
    recordVideo: null,
    recordedSrc: null
  }

  componentDidMount() {
    this.refs.dubtitlePlayer.subscribeToStateChange(this.handleStateChange.bind(this))
  }
  findSubtitle = (currentTime) => {
    const { subtitle } = this.props
    // console.log('currentTime is', currentTime)
    const currentSubtitle = _.findLast(subtitle, (text, time) => {
      // console.log('================================')
      // console.log('time check', 'currentTime =', currentTime, '/ sub time =', parseFloat(time))
      // console.log('text', text)
      if (parseFloat(time) <= currentTime) return text
    })
    // console.log('currentSubtitle', currentSubtitle)
    return currentSubtitle || ' '
  }
  getIsPlayerPlaying = () => _.get(this.state, 'player.ended', true) === false
  getSubtitle = () => this.findSubtitle(this.state.currentTime)
  hasSubtitle = () => this.getSubtitle() !== ' '
  captureUserMedia(callback) {
    var params = { audio: true, video: true }
    navigator.getUserMedia(params, callback, (error) => {
      alert(JSON.stringify(error)) // eslint-disable-line
    })
  };
  onVideoEnded = () => {
    const { isRecording, isPlaybackWithRecorded } = this.state
    console.log('onVideoEnded', 'isRecording', isRecording, 'isPlaybackWithRecorded', isPlaybackWithRecorded)
    // anytime video ended seek 0
    this.refs.dubtitlePlayer.seek(0)
    this.setState({
      isVideoPlaying: false
    })
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
          isPlaybackWithRecorded: true,
          isVideoPlaying: true
        })
      })
    }
  }
  handleStateChange = (state, prevState) => {
    // copy player state to this component's state
    const floorDuration = Math.floor(state.duration)
    const floorCurrentTime = Math.floor(state.currentTime)
    if (this.state.currentTime !== state.currentTime) {
      const oneDecimalCurrentTime = Math.round(state.currentTime * 10) / 10
      const subtitle = this.findSubtitle(oneDecimalCurrentTime)
      this.setState({
        player: state,
        duration: floorDuration,
        currentTime: floorCurrentTime,
        subtitle,
        isVideoPlaying: this.state.currentTime !== floorCurrentTime
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
    // console.log('state', this.state)
    const { subtitle, isRecording, isPlaybackWithRecorded } = this.state
    const { videoSrc, posterSrc } = this.props
    const mutedPlayer = (isRecording || isPlaybackWithRecorded) && this.hasSubtitle()
    // console.log('mutedPlayer', 'isRecording', isRecording, 'isPlaybackWithRecorded', isPlaybackWithRecorded, this.hasSubtitle())
    return (
      <div className='dubtitle'>
        <Player
          muted={mutedPlayer}
          ref='dubtitlePlayer'
          width={900}
          height={450}
          name='dubtitleVideoPlayer'
          poster={posterSrc}
          preload='auto'
        >
          <source src={videoSrc} />
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
            <CurrentTimeDisplay order={2} />
            <ProgressControl order={3} />
            <RecordVideoButton order={4} />
          </ControlBar>
          {
            this.getIsPlayerPlaying() &&
            <div className='dubtitleVideoPlayerSubtitle'>
              <p>{subtitle}</p>
            </div>
          }
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