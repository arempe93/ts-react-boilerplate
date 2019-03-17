import React from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter as Router, Redirect, Route, Switch } from 'react-router-dom'
import { ThemeProvider } from 'styled-components'

import GlobalStyle from '@/components/GlobalStyle'

import theme from '@/theme'

const App = () => (
  <ThemeProvider theme={theme}>
    <article>
      <GlobalStyle />
      <Router>
        <Route exact path='/' render={() => <p>Hello world!</p>} />
      </Router>
    </article>
  </ThemeProvider>
)

export default hot(App)
