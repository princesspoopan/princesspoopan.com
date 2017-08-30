import './Navigator.styl'

import PropTypes from 'prop-types'
import React from 'react'

export default function Navigator ({ children, onClick }) {
  return (
    <div className='navigator' onClick={onClick}>
      <div className='navigator__message'>{ children }</div>
      <img className='navigator__arrow' src={require('./arrow.png')} />
    </div>
  )
}

Navigator.propTypes = {
  children: PropTypes.node,
  onClick: PropTypes.func
}
