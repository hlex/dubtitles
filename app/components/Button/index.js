import React, { PureComponent } from 'react'
import PropTypes from 'prop-types'

export default class Button extends PureComponent {
  static propTypes = {
    className: PropTypes.string,
    outline: PropTypes.bool,
    full: PropTypes.bool,
    name: PropTypes.string,
    onClick: PropTypes.func,
    disabled: PropTypes.bool
  }

  static defaultProps = {
    name: 'Button',
    classified: 'primary',
    disabled: false,
    onClick: () => null
  }

  render() {
    const {
      className,
      name,
      outline,
      full,
      onClick,
      classified,
      disabled,
      children
    } = this.props
    return (
      <button
        disabled={disabled}
        className={`${className} ${
          outline ? 'button-outline' : 'button'
        } ${classified} ${full && 'full'}`}
        onClick={onClick}
      >
        {name}
        {children}
      </button>
    )
  }
}
