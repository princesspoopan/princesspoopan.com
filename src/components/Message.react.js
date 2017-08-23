import React from 'react'

export default class Message extends React.Component {
  render () {
    return (
      <h1 style={{
        position: 'absolute',
        top: 0,
        right: 0,
        bottom: 0,
        left: 0,
        backgroundColor: '#ff4888',
        color: '#fff',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '\'Source Code Pro\', monospace',
        fontSize: '45px',
        margin: '0px'
      }}>
        {'isHappy(me.feel) ? me.code() : me.sleep()'}
      </h1>
    )
  }
}
