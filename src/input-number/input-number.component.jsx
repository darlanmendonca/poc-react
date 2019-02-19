import React from 'react'
import PropTypes from 'prop-types'
import InputText from '../input-text/input-text.component'

export default class InputNumber extends InputText {
  render() {
    const classes = ['input-text']
      .concat(this.stateClasses)
      .join(' ')

    return (
      <label className={classes}>
        <span className='label'>{this.props.label}</span>
        <input
          ref={this.input}
          placeholder={this.props.placeholder}
          value={this.props.value}
          disabled={this.props.disabled}
          readOnly={this.props.readonly}
          autoFocus={this.props.autoFocus}

          onFocus={() => this.forceUpdate()}
          onBlur={() => this.forceUpdate()}
          onChange={this.onChange.bind(this)}
        />
      </label>
    )
  }

  get validations() {
    return {
      required: super.validations.required,
    }
  }

  onChange(event) {
    this.setState({value: event.target.value})
  }
}

InputNumber.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  autoFocus: PropTypes.bool,
  required: PropTypes.bool,
  step: PropTypes.number,
  min: PropTypes.min,
  max: PropTypes.number,
  currency: PropTypes.bool,
  percentage: PropTypes.bool,
  precision: PropTypes.number,
}
