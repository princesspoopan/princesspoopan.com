import './AboutMe.styl'

import React from 'react'

export default function AboutMe () {
  return (
    <div className='about-me'>
      <div className='about-me__header'>
        <img src={require('./rose.png')} className='about-me__icon' />
        <div className='about-me__text'>
          <div className='about-me__name' >Krongkarn Jitsil</div>
          <div className='about-me__portals'>
            <div className='about-me__code-name --special-text'>@princesspoopan</div>
            <a
              target='blank'
              className='about-me__link'
              href='https://github.com/princesspoopan'
            >
              <img src={require('./github.png')} />
            </a>
            <a
              target='blank'
              className='about-me__link'
              href='https://www.linkedin.com/in/princesspoopan/'
            >
              <img src={require('./linkedIn.png')} />
            </a>
          </div>
        </div>
      </div>
      <div className='about-me__layout'>
        <div className='about-me__layout-left'>
          <div className='about-me__summary'>
            <div className='about-me__principle'>
              Working in the <span className='--special-text'>web development</span> field for eight years, with both enterprise and start up companies.&nbsp;
              <span className='--special-text'>Implementing cool and meaningful</span> stuffs are always <span className='--special-text'>my passionate.</span>
              &nbsp;I beleive <span className='--special-text'>putting your heart</span> into what you do, is as important as <span className='--special-text'>technical skills</span> you should have.
            </div>
          </div>
        </div>
        <div className='about-me__layout-right'>
          <img src={require('./me.jpeg')} className='about-me__avatar'/>
        </div>
      </div>
      <div className='about-me__footer'>
        <span className='about-me__powered-by-text'>Powered by: </span>
        <img src={require('./react-logo.png')} className='about-me__powered-by-logo'/>
        <img src={require('./webpack-logo.png')} className='about-me__powered-by-logo'/>
        <img src={require('./yarn-logo.png')} className='about-me__powered-by-logo'/>
        <img
          src={require('./nodejs-logo.png')}
          style={{ position: 'relative', top: '-4px' }}
          className='about-me__powered-by-logo'
        />
        <img src={require('./circleci-logo.png')} className='about-me__powered-by-logo'/>
      </div>
    </div>
  )
}

// <img src={require('./me.jpeg')} className='about-me__avatar'/>
