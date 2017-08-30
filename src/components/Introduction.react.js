import './Introduction.styl'

import React from 'react'

export default function Introduction () {
  return (
    <div className='introduction'>
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
