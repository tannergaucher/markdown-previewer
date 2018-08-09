import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider, injectGlobal } from 'styled-components'

import App from './components/App'

injectGlobal`
  body {
    margin: 0;
    padding: 0;
    font-family: inconsolata;
  }
`

const theme = {
  primary: 'palevioletred',
  secondary: 'papayawhip',
  margin: '1em',
  typography: {
    primaryFont: 'inconsolata',
    secondaryFont: 'helvetica',
    mainTextSize: '20px',
    secondaryTextSize: '16px',
    anchorTextColor: 'black'
  }
}

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <BrowserRouter>
      <Switch>
        <Route path="/" component={App} />
      </Switch>
    </BrowserRouter>
  </ThemeProvider>,
  document.getElementById('root')
)
registerServiceWorker()
