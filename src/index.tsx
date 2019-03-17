import '@babel/polyfill'

import React from 'react'
import { render } from 'react-dom'

import App from '@/pages/App'

const root = document.querySelector('#root')

if (!root) {
  throw new Error('no root element')
}

render(
  <App />,
  root
)
