import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs'
import InputText from './index'
import './input-text.style.scss'

storiesOf('components', module)
  .addDecorator(withKnobs)
  .add('InputText', () => {
    return (
      <InputText
        label={text('label', 'username')}
        placeholder={text('placeholder')}
        value={text('value')}
        disabled={boolean('disabled')}
        readOnly={boolean('readonly')}
        maxLength={number('maxlength')}
        autoCapitalize={select('autocapitalize', ['off', 'on', 'words', 'sentences'])}
        autoFocus={boolean('autofocus')}
        pattern={text('pattern')}
        required={boolean('required')}
      />
    )
  })
