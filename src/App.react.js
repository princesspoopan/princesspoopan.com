import './css/style.css'

import { AppContainer } from 'react-hot-loader'
import CV from './pages/CV.react'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from 'serviceworker-loader!./sw.js'

const App = () => {
  ReactDOM.render(
    <AppContainer>
      <CV/>
    </AppContainer>,
    document.getElementById('main')
  )
}

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./pages/CV.react', () => {
    const NextCV = require('./pages/CV.react').default
    ReactDOM.render(
      <AppContainer>
        <NextCV/>
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
