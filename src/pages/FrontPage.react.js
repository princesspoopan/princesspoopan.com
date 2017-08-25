import './FrontPage.styl'

import AboutMe from '../components/AboutMe.react'
import React from 'react'

export default function FrontPage () {
  return (
    <div className='front-page'>
      <div className='front-page__center'>
        <AboutMe />
      </div>
    </div>
  )
}
