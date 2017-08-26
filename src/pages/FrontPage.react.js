import './FrontPage.styl'

import AboutMe from '../components/AboutMe.react'
import React from 'react'
import Transition from 'react-transition-group/Transition'

const duration = 1000

const defaultStyle = {
  transition: `opacity ${duration}ms ease-in-out`,
  opacity: 0
}

const transitionStyles = {
  entering: { opacity: 0 },
  entered: { opacity: 1 }
}

export default function FrontPage () {
  return (
    <Transition in appear timeout={duration}>
      {(state) => (
        <div style={{ ...defaultStyle, ...transitionStyles[state] }}>
          <div className='front-page'>
            <div className='front-page__bg' />
            <div className='front-page__center'>
              <AboutMe />
            </div>
          </div>
        </div>
      )}
    </Transition>
  )
}
