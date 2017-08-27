import './Home.styl'

import PropTypes from 'prop-types'
import React from 'react'

export default function Home () {
  return (
    <div className='home__bg'>
      <div className='home__header'>
        <img className='home__image' src={require('./header.jpg')} />
      </div>
      <div className='home__body'>
        <div className='home__hello'>Hello</div>
        <div className='home__intro-myself'>
          {'I\'M'}
          <div className='home__my-name'>
            KRONGKARN JITSIL
          </div>
          WEB/SOFTWARE ENGINEER
        </div>
        <Navigator />
        <div className='home__buttons'>
          <Button>get in touch with me</Button>
          <Button>view full cv as pdf</Button>
        </div>
      </div>
      <TopMenu />
      <RightMenu />
    </div>
  )
}

function Button ({ children }) {
  return (
    <div className='button'>{ children }</div>
  )
}

Button.propTypes = {
  children: PropTypes.node
}

function Navigator ({ children }) {
  return (
    <div className='navigator'>{ children }</div>
  )
}

Navigator.propTypes = {
  children: PropTypes.node
}

function TopMenu ({ selectedMenu }) {
  return (
    <div className='top-menu'>
      <div className='top-menu__icon'>
        <div className='top-menu__icon-top'/>
        <div className='top-menu__icon-middle'/>
        <div className='top-menu__icon-bottom'/>
      </div>
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
      <i className='right-menu-link fa fa-github' aria-hidden="true"></i>
      <i className='right-menu-link fa fa-linkedin' aria-hidden="true"></i>
      <i className='right-menu-link fa fa-skype' aria-hidden="true"></i>
      <i className='right-menu-link fa fa-envelope-o' aria-hidden="true"></i>
    </div>
  )
}

TopMenu.propTypes = {
  selectedMenu: PropTypes.string
}
