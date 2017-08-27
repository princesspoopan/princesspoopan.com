import './LevelPoints.styl'

import React from 'react'
import _ from 'lodash'
import propTypes from 'prop-types'

export default function LevelPoints ({ level, max }) {
  return (
    <div className='level-points'>
      {
        _.range(max).map((index) => (
          <i
            key={`level-point-${index}`}
            className={`level-points__point
              ${level <= max + 1 ? '--active' : ''}
              fa fa-circle`
            }
            aria-hidden='true'
          />
        ))
      }
    </div>
  )
}

LevelPoints.propTypes = {
  level: propTypes.number.isRequired,
  max: propTypes.number.isRequired
}
