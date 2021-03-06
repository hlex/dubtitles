import React from 'react'
import _ from 'lodash'
import Modal from 'react-modal-es'
import {
  FacebookIcon,
  FacebookShareButton
} from 'react-share'
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

import { withRedux } from '../../hocs'
import { openModal, closeModal } from '../../hocs/connectModal'
import firebase from '../../firebase'

// ======================================================
// Action
// ======================================================
// import { FORM_CHANGE } from '../../actions/actionTypes'
import { saveDub } from '../../actions'
// ======================================================
// Helper
// ======================================================
import {
  getParameterByName
} from '../../helpers/global'
// ======================================================
// Asset
// ======================================================
import iconHowTo from '../../images/howto.svg'

const hasGetUserMedia = !!(navigator.getUserMedia || navigator.webkitGetUserMedia ||
  navigator.mozGetUserMedia || navigator.msGetUserMedia)

const mapStateToProps = state => {
  const pathname = state.router.location.pathname
  const isViewDubMode = /dub/ig.test(pathname)
  return {
    ...state.domains.dubtitle,
    isViewDubMode
  }
}

const actionToProps = {
  saveDub
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
    translation: '',
    currentTime: 0,
    isVideoPlaying: false,
    isRecording: false,
    isPlaybackWithRecorded: false,
    recordVideo: null,
    recordedSrc: null,
    saveDone: false
  }

  componentDidMount() {
    // openModal('confirmToSaveDub')
    const { isViewDubMode } = this.props
    if (isViewDubMode) {
      const userId = getParameterByName('userId')
      const media = getParameterByName('media')
      firebase
        .database()
        .ref(`/users/${userId}/dubs/${media}`)
        .once('value')
        .then((snapshot) => {
          const mediaFilePath = snapshot.val()
          console.log('mediaFilePath', mediaFilePath)
          const audioPlayer = new Audio(mediaFilePath)
          this.play()
          audioPlayer.play()
          console.log(audioPlayer)
          // new audio
          this.setState({
            audioPlayer
          })
        })
    }
    this.refs.dubtitlePlayer.subscribeToStateChange(this.handleStateChange.bind(this))
  }
  componentWillUnmount = () => {
    if (this.state.audioPlayer !== null) this.state.audioPlayer.pause()
  }
  play = () => {
    this.refs.dubtitlePlayer.play()
  }
  findSubtitle = (currentTime) => {
    const { subtitle } = this.props
    const currentSubtitle = _.findLast(subtitle, (text, time) => {
      if (parseFloat(time) <= currentTime) return text
    })
    return currentSubtitle || ' '
  }
  findTranslation = (currentTime) => {
    const { translation } = this.props
    const currentTranslation = _.findLast(translation, (text, time) => {
      if (parseFloat(time) <= currentTime) return text
    })
    return currentTranslation || ' '
  }
  getCurrentUser = () => _.get(firebase.auth().currentUser, 'uid', '')
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
      // popup confirm to save
      openModal('confirmToSaveDub')
    }
    // if not recording then do nothing.
    if (isRecording) {
      // stop recorded
      this.stopRecord((blobURL) => {
        const audio = new Audio(blobURL)
        // play recorded & video both
        this.refs.dubtitlePlayer.play()
        audio.play()
        this.setState({
          recordedSrc: blobURL,
          isPlaybackWithRecorded: true,
          isVideoPlaying: true
        })
      })
    }
  }
  handleDubAgain = () => {
    closeModal('confirmToSaveDub')
    // clear data
    this.setState({
      recordedSrc: null
    })
  }
  handleSaveDub = () => {
    const { recordVideo } = this.state
    const { slug, saveDub } = this.props
    saveDub({
      recordedSrc: recordVideo.blob,
      mediaSlug: slug
    }, () => {
      // closeModal('confirmToSaveDub')
      this.setState({
        recordedSrc: null,
        saveDone: true
      })
    })
  }
  handleStateChange = (state, prevState) => {
    if (state.currentTime > 0 && this.state.audioPlayer !== null) this.state.audioPlayer.play()
    // copy player state to this component's state
    const floorDuration = Math.floor(state.duration)
    const floorCurrentTime = Math.floor(state.currentTime)
    if (this.state.currentTime !== state.currentTime) {
      const oneDecimalCurrentTime = Math.round(state.currentTime * 10) / 10
      const subtitle = this.findSubtitle(oneDecimalCurrentTime)
      const translation = this.findTranslation(oneDecimalCurrentTime)
      const isVideoPlaying = this.state.currentTime !== floorCurrentTime
      this.setState({
        player: state,
        duration: floorDuration,
        currentTime: floorCurrentTime,
        subtitle,
        translation,
        isVideoPlaying,
        saveDone: false
      })
    }
    const isEnded = state.duration === state.currentTime
    if (isEnded) this.onVideoEnded()
  }
  handleToggleRecord = () => {
    const { isRecording } = this.state
    if (isRecording) {
      // stop record
      // this.stopRecord()
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
        desiredSampRate: 16 * 1000, // bits-per-sample * 1000
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
      if (callback) callback(blobURL)
      // this.setState({
      //   recordedSrc: new Audio(this.state.recordVideo.blob), // window.URL.createObjectURL(this.state.recordVideo.blob),
      //   userMuted: false,
      //   recording: false,
      //   cover: captureVideoFrame('userPlayer', 'jpeg')
      // })
    })
  }
  render() {
    // console.log('Dubtitle:', this.props)
    const { saveDone, translation, subtitle, isRecording, isPlaybackWithRecorded } = this.state
    const { tips = [], slug, title, isViewDubMode, videoSrc, posterSrc } = this.props
    const mutedPlayer = (isRecording || isPlaybackWithRecorded || isViewDubMode) && this.hasSubtitle()
    // console.log('mutedPlayer', 'isRecording', isRecording, 'isPlaybackWithRecorded', isPlaybackWithRecorded, this.hasSubtitle())
    return (
      <div className='dubtitle'>
        <Modal
          name='confirmToSaveDub'
          title=''
          zIndex='99'
          className='confirmToSaveDub'
          overlayColor='rgba(0, 0, 0, 0.7)'
          center
          didOpen={() => null}
          willUnmount={() => null}
          willClose={() => null}
        >
          <div className={`summary ${saveDone ? 'done' : ''}`}>
            <h3>Great</h3>
            <h5 className='italic'>A little more practice will be perfect</h5>
            <h1>{`${_.random(80, 100)}%`}</h1>
            <div className='groupButton'>
              <Button onClick={this.handleDubAgain} className='tertiary' name='dub again' />
              <Button onClick={this.handleSaveDub} className='primary' name='save' />
            </div>
          </div>
          <div className={`share ${saveDone ? 'active' : ''}`}>
            <h3>Share</h3>
            <FacebookShareButton
              url={`https://dubtitles.me/#/dub?userId=${this.getCurrentUser()}&media=${slug}`}
              quote={title}
              hashtag='#dubtitles'
            >
              <div className='icon-wrapper'>
                <FacebookIcon size={32} round />
              </div>
            </FacebookShareButton>
            <Button onClick={this.handleDubAgain} className='primary' name='close' />
          </div>
        </Modal>
        <Player
          muted={mutedPlayer}
          ref='dubtitlePlayer'
          width={900}
          height={450}
          name='dubtitleVideoPlayer'
          poster={posterSrc}
          preload='auto'
        >
          <img className='iconHowTo' src={iconHowTo} />
          <source src={videoSrc} />
          <ControlBar
            autoHide={false}
            className='dubtitleCustomVideoControlBar'
            disableDefaultControls
          >
            {
              !isViewDubMode &&
              <RecordButton
                onClick={this.handleToggleRecord}
                isRecording={isRecording}
                order={0}
              />
            }
            <PlayToggle disabled={isRecording} order={1} />
            <CurrentTimeDisplay order={2} />
            <ProgressControl order={3} />
            {
              !isViewDubMode &&
              <RecordVideoButton disabled={isViewDubMode} order={4} />
            }
          </ControlBar>
          {
            this.getIsPlayerPlaying() &&
            <div className='dubtitleVideoPlayerSubtitle'>
              <p>{subtitle}</p>
            </div>
          }
        </Player>
        <div className='helperPanel'>
          {
            this.props.translation &&
            <h4 className='translate'>{translation}</h4>
          }
          {
            _.map(tips, tip => <h4 className='tip'>{tip}</h4>)
          }
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