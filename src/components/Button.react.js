import './Button.styl'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

export default function Button ({ children, to = '/' }) {
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
