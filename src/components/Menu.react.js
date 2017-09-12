import './Menu.styl'

import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

export default function Menu ({ selectedMenu, white }) {
  const className = ClassNames('menu', {
    '--white': white
  })

  return (
    <div className={className}>
      <div className='menu__icon'>
        <div className='menu__icon-top' />
        <div className='menu__icon-middle' />
        <div className='menu__icon-bottom' />
      </div>
      Menu
    </div>
  )
}

Menu.propTypes = {
  selectedMenu: PropTypes.string,
  white: PropTypes.bool
}
