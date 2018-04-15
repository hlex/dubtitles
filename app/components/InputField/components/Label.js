import React, { PureComponent } from 'react'

export default class Label extends PureComponent {
  static defaultProps = {
    name: 'input',
    tabIndex: 0,
    label: '',
    value: '',
    inputProps: {},
    labelProps: {},
    disabled: false,
    focus: false,
    placeholder: '',
    type: 'text',
    hideLabel: false,
    wrapperStyle: {}
  }
  render() {
    const {
      label,
      value,
      wrapperStyle
    } = this.props
    let requiredLabel = ''
    let classInput = 'wrap-form-input'
    return (
      <div className={`box-form-input ` + requiredLabel} style={wrapperStyle}>
        <div className={classInput}>
          <label>{value}</label>
        </div>
      </div>
    )
  }
}
