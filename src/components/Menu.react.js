import './Menu.styl'

import PropTypes from 'prop-types'
import React from 'react'

export default function Menu ({ selectedMenu }) {
  return (
    <div className='menu'>
      <img src={require('./menu.png')} className='menu__icon' />
      Menu
    </div>
  )
}

Menu.propTypes = {
  selectedMenu: PropTypes.string
}
