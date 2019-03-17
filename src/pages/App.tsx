import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/components/GlobalStyle'

import ModalRoot from '@/widgets/ModalRoot'
import SnackbarRoot from '@/widgets/SnackbarRoot'

import ModalProvider from '@/providers/ModalProvider'
import SnackbarProvider from '@/providers/SnackbarProvider'

import theme from '@/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <ModalProvider>
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
    </ModalProvider>
  </ThemeProvider>
)

export default hot(App)
