import React, { Component } from 'react'
import _ from 'lodash'

export default class CheckboxInput extends Component {
  handleChangeOptions = checkedValue => {
    const { handleChange, value } = this.props
    if (_.includes(value, checkedValue)) {
      handleChange(_.pull(value, checkedValue))
    } else {
      handleChange(_.compact([...value, checkedValue]))
    }
  }

  handleChecked = (option, index) => {
    const { value } = this.props
    try {
      const filterValue = value.find(optionDetail => {
        if (optionDetail.label) return option.value === optionDetail.value
        return optionDetail === option.value
      })
      if (filterValue) return true
    } catch (e) {
      return false
    }
    return false
  }

  render () {
    const { label, disabled, remark, options, name } = this.props
    return (
      <div className='box-form-input'>
        <label htmlFor={name} className='form-label'>{label}</label>
        <span className='checkbox-remark'>
          {remark}
        </span>
        <div className='wrap-form-input'>
          <div className='form-input-checkbox inline'>
            {options.map((detail, index) => {
              const checked = this.handleChecked(detail, index)
              return (
                <label>
                  <input
                    key={detail.value}
                    type='checkbox'
                    name={name}
                    value={detail.value}
                    disabled={disabled || detail.disabled}
                    checked={checked}
                    onChange={() => this.handleChangeOptions(detail.value)}
                  />
                  {detail.label}
                  <span className='input' />
                </label>
              )
            })}
            {this.props.children}
          </div>
        </div>
      </div>
    )
  }
}

CheckboxInput.defaultProps = {
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
