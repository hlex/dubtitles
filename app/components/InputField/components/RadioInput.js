import React, { PureComponent } from 'react'
import _head from 'lodash/head'
import _split from 'lodash/split'
import _map from 'lodash/map'
import { isEmpty } from '../../../helpers/inputForm'
import InputField from '../index'

export default class RadioInput extends PureComponent {
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
    type: 'text'
  }

  renderCustomElement = () => {
    const {
      label,
      value,
      disabled,
      options,
      name,
      errorMessage,
      handleChange,
      handleBlur
    } = this.props

    let classInput = 'form-input'
    if (!isEmpty(errorMessage)) {
      classInput = 'form-input error'
    }
    const inputList = options.map((detail, index) => {
      const getValue = value.value ? value.value : value
      const checked = getValue === detail.value
      const input = (
        <input
          className={classInput}
          type='radio'
          name={name}
          value={detail.value}
          disabled={disabled || detail.disabled}
          checked={checked}
          onChange={() => handleChange(detail.value)}
          onBlur={e => handleBlur(detail.value)}
        />
      )
      return {
        input: input,
        ...detail
      }
    })
    return this.props.customElement(inputList, label, errorMessage)
  }

  getValue = () => {
    const { value } = this.props
    const sanitizedValue = value.value !== undefined ? value.value : value
    if (/\|/.test(sanitizedValue)) return _head(_split(sanitizedValue, '|'))
    return sanitizedValue
  }

  render() {
    const { label, value, disabled, options, name, handleChange, handleBlur, inline } = this.props
    if (this.props.customElement) {
      return this.renderCustomElement()
    }
    const inlineClass = inline ? ' inline' : ''

    return (
      <div>
        {!isEmpty(label) && <label className={`form-label${inlineClass}`}>{label}</label>}
        <div className={`form-input-radio${inlineClass}`}>
          {options.map((detail, index) => {
            const checked = this.getValue() === detail.value
            return (
              <label key={`${name}-${index}`} className='radio-wrapper'>
                <input
                  type='radio'
                  name={name}
                  disabled={disabled || detail.disabled}
                  checked={checked}
                  value={detail.value}
                  onChange={() => handleChange(detail.value)}
                />
                <label
                  htmlFor={label}
                >
                  <a style={{ minWidth: '100px', display: 'inline-block' }} onClick={() => handleChange(detail.value)}>
                    {detail.label}
                  </a>
                  {detail.formData &&
                    _map(detail.formData, (fieldData, key) => {
                      return (
                        <div
                          key={key}
                          style={{
                            display: 'inline-block',
                            width: '100px',
                            marginLeft: '15px'
                          }}
                        >
                          <InputField
                            {...fieldData}
                            onChange={value =>
                              handleChange(`${detail.value}|${value}`)
                            }
                            onBlur={value =>
                              handleBlur(`${detail.value}|${value}`)
                            }
                          />
                        </div>
                      )
                    })}
                </label>
                <span className='input' />
              </label>
            )
          })}
        </div>
      </div>
    )
  }
}
