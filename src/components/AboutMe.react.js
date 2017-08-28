import './AboutMe.styl'

import React from 'react'

export default function AboutMe () {
  return (
    <div className='about-me'>
      <div className='about-me__header'>
        <div className='about-me__name' >Krongkarn Jitsil</div>
        <div className='about-me__portals'>
          <a
            target='blank'
            className='about-me__link'
            href='https://github.com/princesspoopan'
          >
            <img src={require('./github.png')} />
          </a>
        </div>
      </div>
      <div className='about-me__summary'>
        Full Stack Web developer with 8 years of experiences in enterprises and start-up companies.
        Mastering in JavaScript with cutting edge technology stack.
      </div>
      <div className='about-me__buttons'>
        <a
          className='about-me__button --with-image'
          target='blank'
          href='https://www.linkedin.com/in/princesspoopan'
        >
          <img src={require('./linkedIn.png')} />
          <span>My LinkedIn</span>
        </a>
        <a
          className='about-me__button --attention'
          target='blank'
          href='https://www.dropbox.com/s/fz45gyj7k64dmzb/Krongkarn%20Jitsil%20CV.pdf?dl=0'
        >
          <span style={{ position: 'relative', top: '4px' }}>
            Looking for Web Developer
          </span>
        </a>
      </div>
    </div>
  )
}
