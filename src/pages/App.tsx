import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/components/GlobalStyle'

import ModalRoot from '@/widgets/ModalRoot'

import ModalProvider from '@/providers/ModalProvider'

import theme from '@/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <ModalProvider>
      <GlobalStyle />
      <ModalRoot />
      <Router>
        <Switch>
          <Route exact path='/' render={() => <p>Hello world!</p>} />
        </Switch>
      </Router>
    </ModalProvider>
  </ThemeProvider>
)

export default hot(App)
