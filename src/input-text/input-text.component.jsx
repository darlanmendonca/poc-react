import React from 'react'
import PropTypes from 'prop-types'

export default class InputText extends React.Component {
  constructor(props) {
    super(props)
    this.state = {value: ''}
    this.input = React.createRef()
  }

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
          maxLength={this.props.maxLength}
          autoCapitalize={this.props.autoCapitalize}
          autoFocus={this.props.autoFocus}
          pattern={this.props.pattern}

          onFocus={() => this.forceUpdate()}
          onBlur={() => this.forceUpdate()}
          onChange={this.onChange.bind(this)}
        />
      </label>
    )
  }

  get stateClasses() {
    const states = {
      'disabled': this.props.disabled,
      'readonly': this.props.readOnly,
      'has-value': this.state.value,
      'focus': document.activeElement === this.input.current,
    }

    const validations = {
      'invalid': !this.validate(),
      'required': this.validations.required(),
      'pattern': this.validations.required(),
    }

    if (this.props.required || this.props.pattern) {
      Object.assign(states, validations)
    }

    return Object
      .keys(states)
      .filter(state => states[state])
  }

  get validations() {
    return {
      required: () => !this.state.value,
      pattern: () => {
        const reg = new RegExp(this.props.pattern)

        return this.state.value
          ? !reg.test(this.state.value)
          : false
      },
    }
  }

  onChange(event) {
    this.setState({value: event.target.value})
  }

  validate() {
    const validations = {}

    Object
      .keys(this.validations)
      .forEach(validation => {
        const propIsInvalid = this.validations[validation]()

        if (propIsInvalid) {
          // console.log(validation, 'invalid')
          validations[validation] = true
        }
      })

    const isInvalid = Object.values(validations).some(item => item === true)

    return !isInvalid
  }
}

InputText.propTypes = {
  label: PropTypes.string.isRequired,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  disabled: PropTypes.bool,
  readOnly: PropTypes.bool,
  maxLength: PropTypes.number,
  autoCapitalize: PropTypes.oneOf(['off', 'on', 'words', 'sentences']),
  autoFocus: PropTypes.bool,
  pattern: PropTypes.string,
  required: PropTypes.bool,
}
