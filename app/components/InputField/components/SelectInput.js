import React, { PureComponent } from 'react'
import { isEmpty, getOption } from '../../../helpers/inputForm'
import _ from 'lodash'

export default class SelectInput extends PureComponent {
  static defaultProps = {
    name: 'input',
    tabIndex: 0,
    label: '',
    value: '',
    options: [],
    inputProps: {},
    labelProps: {},
    disabled: false,
    focus: false,
    placeholder: 'กรุณาเลือก',
    type: 'text'
  }

  state = {
    showOptions: false
  }

  handleSelectChange = e => {
    const { options, handleChange } = this.props
    const value = e.target.value
    handleChange(getOption(value, options))
  }

  toggleOptions = value => {
    const { disabled } = this.props
    const { showOptions } = this.state
    if (!disabled) {
      this.setState({
        showOptions: !showOptions
      })
    }
  }

  hideOptions = () => {
    this.setState({
      showOptions: false
    })
  }

  handleSelectOption = value => {
    this.toggleOptions()
    this.props.handleChange(value)
  }

  render() {
    const { label, value, disabled, remark, placeholder, errorMessage, options, rules, name, wrapperStyle } = this.props
    const { showOptions } = this.state
    const isActive = showOptions ? 'active' : ''
    const renderOptions = options.map(option => {
      return (
        <span
          value={option.value}
          key={`${option.label}-${option.value}`}
          onClick={() => this.handleSelectOption(option.value)}
        >
          {option.label}
        </span>
      )
    })

    const selectedOption = _.find(options, ['value', value])
    let renderErrorMessage = ''
    let requiredLabel = ''
    let classInput = 'wrap-form-input'
    if (errorMessage !== '') {
      classInput = 'wrap-form-input error'
      renderErrorMessage = <div className='error-message'>{errorMessage}</div>
    }

    if (!isEmpty(rules)) {
      if (!isEmpty(rules.required)) {
        requiredLabel = 'imp'
      }
    }
    return (
      <div className={`box-form-input ` + requiredLabel} style={wrapperStyle} onClick={this.toggleOptions}>
        { showOptions && <div className='select-overlay' onClick={this.hideOptions} />}
        {
          label &&
          <label htmlFor={label} className='form-label'>
            {label} {!isEmpty(remark) && <span className='remark'>{remark}</span>}
          </label>
        }
        <div className={classInput}>
          <div className={`form-input ${isActive}`} name={name} disabled={disabled}>
            {_.isEmpty(selectedOption) ? placeholder : selectedOption.label}
          </div>
          {this.state.showOptions && <div className='options'>{renderOptions}</div>}
          {renderErrorMessage !== '' && <div className='validation-label'>{renderErrorMessage}</div>}
        </div>
        {this.props.children}
      </div>
    )
  }
}
