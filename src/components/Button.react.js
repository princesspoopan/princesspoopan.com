import './Button.styl'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'

export default function Button ({ children, to = '/', href }) {
  return href ? (
    <a className='button' target='blank' href={href} >{children}</a>
  ) : (
    <Link className='button' to={to}>{ children }</Link>
  )
}

Button.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  href: PropTypes.string
}
