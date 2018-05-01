import PropTypes from 'prop-types'
import React, { Component } from 'react'
import classNames from 'classnames'

import icon from '../../../images/play2.svg'

const propTypes = {
  player: PropTypes.object,
  className: PropTypes.string
}

export default class DownloadButton extends Component {
  constructor(props, context) {
    super(props, context)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {}

  render() {
    const { player, className } = this.props
    return (
      <a
        ref={c => {
          this.button = c
        }}
        className={classNames(className, {
          'video-react-control': true,
          'video-react-button': true,
          'customize-record-button': true
        })}
        style={{
          backgroundImage:
            `url(${icon})`,
          backgroundRepeat: 'no-repeat',
          backgroundPosition: 'center'
        }}
        tabIndex='0'
        onClick={this.handleClick}
      />
    )
  }
}

DownloadButton.propTypes = propTypes
