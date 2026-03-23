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
              href='https://www.dropbox.com/scl/fi/1g4ieopdmfcxey97l7vqb/Krongkarn-JITSIL-CV-2026.pdf?rlkey=abys80myxdmmy6pgpiagb1zbu&st=rjnbauus&dl=0'
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
