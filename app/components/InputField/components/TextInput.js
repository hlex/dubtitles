import React, { PureComponent } from 'react'
import { isEmpty } from '../../../helpers/inputForm'

export default class TextInput extends PureComponent {
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

  renderCustomElement = () => {
    const {
      label,
      value,
      disabled,
      focus,
      placeholder,
      name,
      errorMessage,
      handleChange,
      handleKeyCode,
      handleBlur
    } = this.props
    let classInput = 'form-input'
    if (errorMessage !== '') {
      classInput = 'form-input error'
    }
    const input = (
      <input
        ref={input => {
          if (input != null && focus) {
            input.focus()
          }
        }}
        className={classInput}
        type='text'
        name={name}
        value={value}
        maxLength={this.props.maxLength}
        placeholder={placeholder}
        disabled={disabled}
        onKeyUp={e => handleKeyCode(e)}
        onChange={e => handleChange(e.target.value)}
        onBlur={e => handleBlur(e.target.value)}
      />
    )
    return this.props.customElement(input, label, errorMessage)
  }

  render() {
    const {
      type,
      label,
      value,
      disabled,
      remark,
      focus,
      placeholder,
      name,
      errorMessage,
      handleChange,
      handleKeyCode,
      handleBlur,
      rules,
      hideLabel,
      wrapperStyle
    } = this.props

    if (this.props.customElement) {
      return this.renderCustomElement()
    }

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
      <div className={`box-form-input ` + requiredLabel} style={wrapperStyle}>
        {
          !hideLabel &&
          <label htmlFor={label} className='form-label'>
            {label} {!isEmpty(remark) && <span className='remark'>{remark}</span>}
          </label>
        }
        <div className={classInput}>
          <input
            ref={input => {
              if (input != null && focus) {
                input.focus()
              }
            }}
            className='form-input'
            type={type}
            name={name}
            value={value}
            maxLength={this.props.maxLength}
            placeholder={placeholder}
            disabled={disabled}
            onKeyUp={e => handleKeyCode(e)}
            onChange={e => handleChange(e.target.value)}
            onBlur={e => handleBlur(e.target.value)}
          />
          {renderErrorMessage !== '' && <div className='validation-label'>{renderErrorMessage}</div>}
        </div>
        {this.props.children}
      </div>
    )
  }
}
