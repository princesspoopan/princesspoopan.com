import './Navigator.styl'

import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'
import React from 'react'
import classNames from 'classnames'

export default function Navigator ({ children, to, up, white }) {
  const className = classNames('navigator', {
    '--white': white,
    '--up': up
  })
  return (
    <Link to={to}>
      <div className={className}>
        <div className='navigator__message'>
          { children.split('').reverse().map(
            (char, index) => {
              return char.trim()
                ? <div key={index + '__' + char}>{ char.trim() }</div>
                : <div key={index + '__' + char} className='--space' />
            })
          }
        </div>
        <div className='navigator__arrow'>
          { up ? <div>&#8593;</div> : <div>&#8595;</div> }
        </div>
      </div>
    </Link>
  )
}

Navigator.propTypes = {
  children: PropTypes.string.isRequired,
  to: PropTypes.string,
  up: PropTypes.bool,
  white: PropTypes.bool
}
