import React, { PureComponent } from 'react'
import { isEmpty } from '../../../helpers/inputForm'

export default class SearchInput extends PureComponent {
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
    type: 'text'
  }

  render() {
    const {
      label,
      value,
      disabled,
      remark,
      focus,
      name,
      errorMessage,
      handleChange,
      handleKeyCode,
      handleBlur
    } = this.props

    let classInput = 'wrap-form-input'
    if (!isEmpty(errorMessage)) {
      classInput = 'wrap-form-input error'
    }

    return (
      <div className='box-form-input'>
        {label && (
          <label htmlFor={label} className='form-label'>
            {label}{' '}
            {!isEmpty(remark) && <span className='remark'>{remark}</span>}
          </label>
        )}
        <div className={classInput}>
          <input
            ref={input => {
              if (input != null && focus) {
                input.focus()
              }
            }}
            className='form-input search'
            type='text'
            name={name}
            value={value}
            maxLength={this.props.maxLength}
            placeholder='&#xf002; Search'
            disabled={disabled}
            onKeyUp={e => handleKeyCode(e)}
            onChange={e => handleChange(e.target.value)}
            onBlur={e => handleBlur(e.target.value)}
          />
          <i className='fa fa-search' aria-hidden='true' />
        </div>
        {this.props.children}
      </div>
    )
  }
}
