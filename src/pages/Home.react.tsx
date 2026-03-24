import './Home.styl'

import { AppLayout } from '../components/AppLayout.react'
import { Button } from '../components/Button.react'
import { Introduction } from '../components/Introduction.react'
import { Menu } from '../components/Menu.react'
import { Navigator } from '../components/Navigator.react'

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
              href='https://www.dropbox.com/scl/fi/yxvf2udk6glfqqbm3orwg/Krongkarn-JITSIL-CV-2026.pdf?rlkey=gkb019300e7yed1ftv584tti2&st=tzkw64ir&dl=0'
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
