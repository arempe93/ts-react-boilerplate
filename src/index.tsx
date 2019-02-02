import '@babel/polyfill'

import * as OfflinePluginRuntime from 'offline-plugin/runtime'
import React from 'react'
import { render } from 'react-dom'

import App from '@/App'

OfflinePluginRuntime.install()

const root = document.querySelector('#root')

if (!root) {
  throw new Error('no root element')
}

render(
  <App />,
  root
)
