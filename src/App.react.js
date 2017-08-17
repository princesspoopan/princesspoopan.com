import { AppContainer } from 'react-hot-loader'
import Message from './components/Message.react'
import React from 'react'
import ReactDOM from 'react-dom'

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

App()
