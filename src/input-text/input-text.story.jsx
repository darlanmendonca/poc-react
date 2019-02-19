import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, text, boolean, number } from '@storybook/addon-knobs'
import InputText from './index'

storiesOf('components', module)
  .addDecorator(withKnobs)
  .add('InputText', () => {
    return (
      <InputText
        label={text('label', 'username')}
        placeholder={text('placeholder', 'lorem')}
      />
    )
  })
