import './Introduction.styl'

import React from 'react'

export default function Introduction () {
  return (
    <div className='introduction__layout'>
      <img src={require('./me.jpeg')} className='introduction__avatar'/>
      <div className='introduction__about-me'>
        <div>{'console.log(\'Hello World\')'}</div>
        <div>{'const me = { ...mother, ...father }'}</div>
        <div>{'me.born = moment("02/04/1987", "MM/DD/YYYY").month(0).from(moment().month(0))'}</div>
        <div>{'me.code = () => { return [\'JavaScript\', \'HTML\', \'CSS\', \'ReactJS\'] }'}</div>
        <div>{'while (world.stillMoving) { isHappy(me) ? me.code() : me.sleep() }'}</div>
      </div>
    </div>
  )
}

// <img src={require('./me.jpeg')} className='introduction__avatar'/>
