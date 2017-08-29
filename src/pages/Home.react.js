import './Home.styl'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

export default function Home () {
  return (
    <div className='home'>
      <div className='home__bg'>
        <div className='home__header' />
        <div className='home__body'>
          <div className='home__hello'>Hello</div>
          <div className='home__intro-myself'>
            {'I\'M'}
            <div className='home__my-name'>
              KRONGKARN
              <br/>
              JITSIL
            </div>
          </div>
          <div className='home__occupation'>
            WEB/SOFTWARE ENGINEER
          </div>
          <div className='home__buttons'>
            <Button>get in touch with me</Button>
            <Button to='/cv'>view full cv as pdf</Button>
          </div>
          <div className='home__navigator'>
            <Navigator>About me</Navigator>
          </div>
        </div>
      </div>
      <TopMenu />
      <RightMenu />
    </div>
  )
}

function Button ({ children, to = '/' }) {
  return (
    <Link className='button' to={to}>
      { children }
    </Link>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string
}

function Navigator ({ children }) {
  return (
    <div className='navigator'>
      <div className='navigator__message'>{ children }</div>
      <img className='navigator__arrow' src={require('./arrow.png')} />
    </div>
  )
}

Navigator.propTypes = {
  children: PropTypes.node
}

function TopMenu ({ selectedMenu }) {
  return (
    <div className='top-menu'>
      <img src={require('./menu.png')} className='top-menu__icon' />
      Menu
    </div>
  )
}

TopMenu.propTypes = {
  selectedMenu: PropTypes.string
}

function RightMenu () {
  return (
    <div className='right-menu'>
      <i className='right-menu__link fa fa-github' aria-hidden="true"></i>
      <i className='right-menu__link fa fa-linkedin' aria-hidden="true"></i>
      <i className='right-menu__link fa fa-skype' aria-hidden="true"></i>
      <i className='right-menu__link fa fa-envelope-o' aria-hidden="true"></i>
    </div>
  )
}

TopMenu.propTypes = {
  selectedMenu: PropTypes.string
}
