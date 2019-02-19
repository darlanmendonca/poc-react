import {configure, setAddon} from '@storybook/react'

const req = require.context('../src', true, /.story.jsx$/)

configure(loadStories, module)

function loadStories() {
  req.keys().forEach((filename) => req(filename))
}
