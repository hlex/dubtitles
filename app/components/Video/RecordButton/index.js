import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classNames from 'classnames'

const propTypes = {
  player: PropTypes.object,
  className: PropTypes.string,
  isRecording: PropTypes.bool
}

export default class DownloadButton extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    this.props.onClick()
  }

  render() {
    const { player, className, isRecording } = this.props
    return (
      <a
        ref={c => {
          this.button = c
        }}
        className={classNames(className, {
          'video-react-control': true,
          'video-react-button': true,
          'customizeRecordButton': true,
          'isRecording': isRecording
        })}
        tabIndex='0'
        onClick={this.handleClick}
      >
        <div className={classNames({}, {
          'recordButton': true,
          'isRecording': isRecording
        })} />
      </a>
    )
  }
}

DownloadButton.propTypes = propTypes
