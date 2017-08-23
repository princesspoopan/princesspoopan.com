import './FrontPage.styl'

import Introduction from '../components/Introduction.react'
import React from 'react'

export default function FrontPage () {
  return (
    <div className='front-page'>
      <div className='front-page__center'>
        <Introduction />
      </div>
    </div>
  )
}
