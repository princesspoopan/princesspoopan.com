import './CV.styl'

import BoxContainer from '../components/BoxContainer.react'
import React from 'react'

export default function CV () {
  return (
    <div className='cv'>
      <div className='cv__body'>
        <div className='cv__about-me'>
          <BoxContainer>
            <div className='cv__image' />
            <div className='cv__about-me-detail'>
              <i className='fa fa-user' aria-hidden='true'></i>
              <span>
                Front-end Web Engineer currently based in Bangkok.
                You can call me Poopan. I’m a weird girl who likes making weird things with web technologies.
                I like to resolve challenging problems, developing rich web experiences & web applications
              </span>
            </div>
            <div className='cv__about-me-detail'>
              <i className='fa fa-phone' aria-hidden='true'></i>
              <span>
                (+66)99-829-5495
              </span>
            </div>
            <div className='cv__about-me-detail'>
              <i className='fa fa-envelope' aria-hidden='true'></i>
              <span>
                krongkarn.jitsil@gmail.com
              </span>
            </div>
            <div className='cv__about-me-detail'>
              <i className='fa fa-graduation-cap' aria-hidden='true'></i>
              <div>
                <span className='cv__education'>
                  <span className='cv__education-degree'>
                    Bachelor degree of Computer Sciences
                  </span>
                  <span className='cv__education-name'>
                    Kasetsart University
                  </span>
                </span>
                <span className='cv__education-period'>
                  MAY 2005 - APR 2009
                </span>
                <span className='cv__education-text'>
                  Part of web researcher team in Senior years and received the scholarship award
                  by represented the navigation guide system for Thailand National Museum
                </span>
              </div>
              <div>
                <span className='cv__education'>
                  <span className='cv__education-degree'>
                    Math & Sciences Major
                  </span>
                  <span className='cv__education-name'>
                    Satriwithaya School
                  </span>
                </span>
                <span className='cv__education-period'>
                  APR 1999 - MAR 2005
                </span>
              </div>
            </div>
          </BoxContainer>
        </div>
      </div>
    </div>
  )
}
