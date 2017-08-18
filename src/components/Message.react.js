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
        backgroundColor: '#ff3399',
        color: '#fff',
        textAlign: 'center',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontFamily: '\'Great Vibes\', cursive',
        fontSize: '55px',
        margin: '0px'
      }}>
        princesspoopan.com is coming very soon...
      </h1>
    )
  }
}
