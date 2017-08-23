import './Message.styl'

import React from 'react'

export default class Message extends React.Component {
  render () {
    return (
      <h1 className='message'>
        {'isHappy(me) ? me.code() : me.sleep()'}
      </h1>
    )
  }
}
