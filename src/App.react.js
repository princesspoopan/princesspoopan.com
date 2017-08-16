import Message from './components/Message.react'
import React from 'react'
import ReactDOM from 'react-dom'

const App = () => {
  return ReactDOM.render(<Message/>, document.getElementById('main'))
}

App()
