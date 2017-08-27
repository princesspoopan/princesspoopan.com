import './css/style.css'

import { AppContainer } from 'react-hot-loader'
import Home from './pages/Home.react'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from 'serviceworker-loader!./sw.js'

const App = () => {
  ReactDOM.render(
    <AppContainer>
      <Home />
    </AppContainer>,
    document.getElementById('main')
  )
}

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./pages/Home.react', () => {
    const NextHome = require('./pages/Home.react').default
    ReactDOM.render(
      <AppContainer>
        <NextHome />
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
