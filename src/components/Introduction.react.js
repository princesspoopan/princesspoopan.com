import './Introduction.styl'

import ClassNames from 'classnames'
import PropTypes from 'prop-types'
import React from 'react'

export default function Introduction ({ white }) {
  const className = ClassNames('introduction', { '--white': white })
  return (
    <div className={className}>
      <div className='introduction__hello'>Hello</div>
      <div className='introduction__intro-myself'>
        {'I\'M'}
        <div className='introduction__my-name'>
          KRONGKARN
          <br/>
          JITSIL
        </div>
      </div>
      <div className='introduction__occupation'>
        WEB/SOFTWARE ENGINEER
      </div>
    </div>
  )
}

Introduction.propTypes = {
  white: PropTypes.bool
}
