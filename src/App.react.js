import './css/style.css'

import { AppContainer } from 'react-hot-loader'
import AppRouter from './AppRouter.react'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from 'serviceworker-loader!./sw.js'

const App = () => {
  ReactDOM.render(
    <AppContainer>
      <AppRouter />
    </AppContainer>,
    document.getElementById('main')
  )
}

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./AppRouter.react', () => {
    const NextAppRouter = require('./AppRouter.react').default
    ReactDOM.render(
      <AppContainer>
        <NextAppRouter />
      </AppContainer>,
      document.getElementById('main')
    )
  })
}

navigator.serviceWorker && registerServiceWorker({ scope: '/' })
  .then(function (reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope)
  }).catch(function (error) {
    // registration failed
    console.log('Registration failed with ' + error)
  })

App()
