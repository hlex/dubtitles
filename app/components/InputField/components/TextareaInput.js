import React, { PureComponent } from 'react'
import { isEmpty } from '../../../helpers/inputForm'

export default class TextareaInput extends PureComponent {
  static defaultProps = {
    name: 'input',
    rows: 3,
    cols: 4,
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
      focus,
      remark,
      rows,
      cols,
      errorMessage,
      handleChange,
      handleKeyCode,
      handleBlur,
      rules
    } = this.props

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
      <div className={`box-form-input ` + requiredLabel}>
        <label htmlFor={label} className='form-label'>
          {label} {!isEmpty(remark) && <span className='remark'>{remark}</span>}
        </label>
        <div className={classInput}>
          <textarea
            ref={input => {
              if (input != null && focus) {
                input.focus()
              }
            }}
            rows={rows}
            cols={cols}
            disabled={disabled}
            className='form-input'
            value={value}
            maxLength={this.props.maxLength}
            onKeyUp={e => handleKeyCode(e)}
            onChange={e => handleChange(e.target.value)}
            onBlur={e => handleBlur(e.target.value)}
          >
            {value}
          </textarea>
          {renderErrorMessage !== '' && <div className='validation-label'>{renderErrorMessage}</div>}
        </div>
        {this.props.children}
      </div>
    )
  }
}
