import './Home.styl'

import { AppLayout } from '../components/AppLayout.react'
import { Button } from '../components/Button.react'
import { Introduction } from '../components/Introduction.react'
import { Menu } from '../components/Menu.react'
import { Navigator } from '../components/Navigator.react'
import * as React from 'react'

export const Home = () => {
  return (
    <AppLayout firstPage>
      <div className='home__bg'>
        <div className='home__header' />
        <div className='home__body'>
          <Introduction />
          <div className='home__buttons'>
            <Button to='/cv'>
              <span>my cv page</span>
            </Button>
            <Button
              href='https://www.dropbox.com/s/ld1ynbnqm24uy4q/JITSIL%20Krongkarn%20CV%202019.pdf?dl=0'
            >
              <span>view full cv as pdf</span>
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

export default Home
