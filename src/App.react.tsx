import './css/style.css'

import React from 'react'
import { createRoot } from 'react-dom/client'
import { AppRouter } from './AppRouter.react'

const container = document.getElementById('main')!
createRoot(container).render(
  <React.StrictMode>
    <AppRouter />
  </React.StrictMode>
)
