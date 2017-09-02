import './WorkExperiences.styl'

import AppLayout from '../components/AppLayout.react'
import Button from '../components/Button.react'
import Carousel from '../components/Carousel.react'
import Menu from '../components/Menu.react'
import Navigator from '../components/Navigator.react'
import React from 'react'
import SlideShow from '../components/SlideShow.react'

export default function WorkExperiences () {
  return (
    <AppLayout>
      <div className='work-experiences'>
        <div className='work-experiences__center'>
          <div className='work-experiences__header'>
            Work Experiences
          </div>
          <SlideShow
            slides={
              [
                <Carousel key='carousel_1' />,
                <Carousel key='carousel_2' />
              ]
            }
          />
          <div className='work-experiences__cv-button'>
            <Button to='/cv'>view full cv as pdf</Button>
          </div>
        </div>
        <div className='work-experiences__next-navigator'>
          <Navigator to='/'>Recommendations</Navigator>
        </div>
        <div className='work-experiences__paper-border' />
        <div className='work-experiences__menu'>
          <Menu />
        </div>
      </div>
    </AppLayout>
  )
}
