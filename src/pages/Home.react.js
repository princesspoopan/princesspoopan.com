import './Home.styl'

import Button from '../components/Button.react'
import Introduction from '../components/Introduction.react'
import Menu from '../components/Menu.react'
import Navigator from '../components/Navigator.react'
import React from 'react'
import RightMenu from '../components/RightMenu.react'
import propTypes from 'prop-types'
import { withRouter } from 'react-router-dom'

function Home ({ history }) {
  return (
    <div className='home'>
      <div className='home__bg'>
        <div className='home__header' />
        <div className='home__body'>
          <Introduction />
          <div className='home__buttons'>
            <Button>get in touch with me</Button>
            <Button to='/cv'>view full cv as pdf</Button>
          </div>
          <div className='home__navigator'>
            <Navigator
              onClick={() => {
                history.push('/aboutme')
              }}
            >
              About me
            </Navigator>
          </div>
        </div>
      </div>
      <Menu />
      <RightMenu />
    </div>
  )
}

Home.propTypes = {
  history: propTypes.object.isRequired
}

export default withRouter(Home)
