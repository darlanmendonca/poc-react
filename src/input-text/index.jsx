import React, { Component } from 'react'

const InputText = (props) =>
  <label>
    <span className='label'>{props.label}</span>
    <input
      placeholder={props.placeholder}
    />
  </label>

export default InputText
