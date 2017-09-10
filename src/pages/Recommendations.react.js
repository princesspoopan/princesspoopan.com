import './Recommendations.styl'

import AppLayout from '../components/AppLayout.react'
import Menu from '../components/Menu.react'
import Navigator from '../components/Navigator.react'
import React from 'react'
import SlideShow from '../components/SlideShow.react'

export default function Recommendations () {
  return (
    <AppLayout>
      <div className='recommendations'>
        <div className='recommendations__top-left-fold' />
        <div className='recommendations__bottom-right-fold' />
        <div className='recommendations__header'>
          Recommendation
        </div>
        <div className='recommendations__slide-show'>
          <SlideShow
            slides={[
              <div className='recommendations__quote-bg' key='1'>
                <div className='recommendations__quote-icon'>“</div>
                praty
              </div>,
              <div key='2'>anais</div>,
              <div key='3'>simon</div>
            ]}
            renderButtons={(children) => (
              <div className='recommendations__slide-show-buttons'>
                { children }
              </div>
            )}
          />
        </div>
        <div className='recommendations__next-navigator'>
          <Navigator white to='/'>{'Why hire me?'}</Navigator>
        </div>
        <div className='recommendations__menu'>
          <Menu white />
        </div>
      </div>
    </AppLayout>
  )
}
