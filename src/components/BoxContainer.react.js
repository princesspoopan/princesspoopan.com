import './BoxContainer.styl'

import React from 'react'
import propTypes from 'prop-types'

export default function BoxContainer ({ children, width, height }) {
  const style = { width: width || 'auto', height: height || 'auto' }
  return (
    <div className='box-container' style={style}>{ children }</div>
  )
}

BoxContainer.propTypes = {
  children: propTypes.node,
  width: propTypes.string,
  height: propTypes.string
}
