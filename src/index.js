import React from 'react'
import { render } from 'react-dom'

const root = document.querySelector('#root')

if (!root) {
  throw new Error('no root element')
}

render(
  <div>Hello, world!</div>,
  root
)
