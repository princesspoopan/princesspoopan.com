import { AppContainer } from 'react-hot-loader'
import Message from './components/Message.react'
import React from 'react'
import ReactDOM from 'react-dom'
import registerServiceWorker from 'serviceworker-loader!./sw.js'

const App = () => {
  ReactDOM.render(
    <AppContainer>
      <Message/>
    </AppContainer>,
    document.getElementById('main')
  )
}

// Hot Module Replacement API
if (module.hot) {
  module.hot.accept('./components/Message.react', () => {
    const NextMessage = require('./components/Message.react').default
    ReactDOM.render(
      <AppContainer>
        <NextMessage/>
      </AppContainer>,
      document.getElementById('main')
    )
  })
}

registerServiceWorker({ scope: '/' })
  .then(function (reg) {
    // registration worked
    console.log('Registration succeeded. Scope is ' + reg.scope)
  }).catch(function (error) {
    // registration failed
    console.log('Registration failed with ' + error)
  })

App()
