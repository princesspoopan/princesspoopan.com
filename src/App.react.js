import { AppContainer } from 'react-hot-loader'
import FrontPage from './pages/FrontPage.react'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from 'serviceworker-loader!./sw.js'

const App = () => {
  ReactDOM.render(
    <AppContainer>
      <FrontPage/>
    </AppContainer>,
    document.getElementById('main')
  )
}

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./pages/FrontPage.react', () => {
    const NextFrontPage = require('./pages/FrontPage.react').default
    ReactDOM.render(
      <AppContainer>
        <NextFrontPage/>
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
