import './AboutMe.styl'

import Introduction from '../components/Introduction.react'
import Menu from '../components/Menu.react'
import Navigator from '../components/Navigator.react'
import React from 'react'
import RightMenu from '../components/RightMenu.react'

export default function AboutMe () {
  return (
    <div className='about-me'>
      <div className='about-me__body'>
        <div className='about-me__left-panel'>
          <div className='about-me__poopan'>
            Poopan
          </div>
          <div className='about-me__header'>
            About Me
          </div>
          <div className='about-me__detail'>
            I am Krongkran Jitsil, a Front-end Web Engineer based in Bangkok.
             You can call me Poopan. I’m a weird girl who likes making weird things
             with web technologies. I like to resolve challenging problems and
             imagine useful animations, developing rich web experiences & web applications.
            <br/>
             When not working or futzing around with code, I talk to my cats, shop for Hello Kitty,
             and enjoy spa day with my freinds.
          </div>
          <div className='about-me__next-navigator'>
            <Navigator to='/' white >Skills</Navigator>
          </div>
        </div>
        <div className='about-me__right-panel'>
          <div className='about-me__menu'>
            <Menu white />
            <div className='about-me__introduction'>
              <Introduction white />
            </div>
          </div>
        </div>
      </div>
      <div className='about-me__side-bar'>
        <RightMenu />
        <div className='about-me__prev-navigator'>
          <Navigator to='/' up >Back to top</Navigator>
        </div>
      </div>
    </div>
  )
}
