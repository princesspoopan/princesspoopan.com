import './BoxContainer.styl'

import React from 'react'
import propTypes from 'prop-types'

export default function BoxContainer ({ children }) {
  return (
    <div className='box-container'>{ children }</div>
  )
}

BoxContainer.propTypes = {
  children: propTypes.node
}
