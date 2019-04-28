import './css/style.css'
import { AppRouter } from './AppRouter.react'
// import registerServiceWorker from 'serviceworker-loader!./sw.js'

import * as React from 'react'
import * as ReactDOM from 'react-dom'
declare let module: any

ReactDOM.render(
    <AppRouter />,
    document.getElementById('main')
)

if (module.hot) {
  module.hot.accept()
}

// navigator.serviceWorker && registerServiceWorker({ scope: '/' })
//   .then((reg: {scope: any}) => {
//     // registration worked
//     console.log('Registration succeeded. Scope is ' + reg.scope)
//   }).catch(function (error: any) {
//     // registration failed
//     console.log('Registration failed with ' + error)
//   })
