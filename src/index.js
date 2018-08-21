import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from './registerServiceWorker'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import { ThemeProvider, injectGlobal } from 'styled-components'

import App from './components/App'

injectGlobal`
@import url('https://fonts.googleapis.com/css?family=Roboto+Mono');
@import url('https://fonts.googleapis.com/css?family=Montserrat');

html {
  margin: 0;
  padding: 0;
}
  body {
    margin: 0;
    padding: 0;
    font-family: Roboto mono;
  }
`

ReactDOM.render(
  <BrowserRouter>
    <Switch>
      <Route path="/" component={App} />
    </Switch>
  </BrowserRouter>,
  document.getElementById('root')
)
registerServiceWorker()
