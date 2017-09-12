import './Home.styl'

import AppLayout from '../components/AppLayout.react'
import Button from '../components/Button.react'
import Introduction from '../components/Introduction.react'
import Menu from '../components/Menu.react'
import Navigator from '../components/Navigator.react'
import React from 'react'

export default function Home () {
  return (
    <AppLayout firstPage>
      <div className='home__bg'>
        <div className='home__header' />
        <div className='home__body'>
          <Introduction />
          <div className='home__buttons'>
            <Button to='/cv'>
              my cv page
            </Button>
            <Button
              href='https://www.dropbox.com/s/fz45gyj7k64dmzb/Krongkarn%20Jitsil%20CV.pdf?dl=0'
            >
              view full cv as pdf
            </Button>
          </div>
          <div className='home__navigator'>
            <Navigator to='/aboutme'>
              About me
            </Navigator>
          </div>
        </div>
        <div className='home__menu'>
          <Menu />
        </div>
      </div>
    </AppLayout>
  )
}
