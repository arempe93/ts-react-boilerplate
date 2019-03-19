import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/components/GlobalStyle'

import ModalRoot from '@/widgets/ModalRoot'
import SnackbarRoot from '@/widgets/SnackbarRoot'

import SnackbarProvider from '@/providers/SnackbarProvider'

import theme from '@/theme'

import { StateProvider } from '@/state'

const App = () => (
  <ThemeProvider theme={theme}>
    <StateProvider>
      <SnackbarProvider>
        <GlobalStyle />
        <ModalRoot />
        <SnackbarRoot />
        <Router>
          <Switch>
            <Route exact path='/' render={() => <p>Hello world!</p>} />
          </Switch>
        </Router>
      </SnackbarProvider>
    </StateProvider>
  </ThemeProvider>
)

export default hot(App)
