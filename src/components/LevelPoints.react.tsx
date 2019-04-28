import './LevelPoints.styl'

import * as React from 'react'
import { range } from 'lodash'

interface Props {
  level: number,
  max: number
}

export const LevelPoints = ({ level, max }: Props) => {
  return (
    <div className='level-points'>
      {
        range(max).map((index) => (
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
