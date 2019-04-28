import './Navigator.styl'

import { Link } from 'react-router-dom'
import * as React from 'react'
import classNames from 'classnames'


interface PropsType {
  children: string,
  to: string,
  up?: boolean,
  white?: boolean
}

export class Navigator extends React.Component<PropsType, {}> {
  public render () {
    const className = classNames('navigator', {
      '--white': this.props.white,
      '--up': this.props.up
    })
    return (
      <Link to={this.props.to}>
        <div className={className}>
          <div className='navigator__message'>
            { this.props.children.split('').reverse().map(
              (char, index) => {
                return char.trim()
                  ? <div key={index + '__' + char}>{ char.trim() }</div>
                  : <div key={index + '__' + char} className='--space' />
              })
            }
          </div>
          <div className='navigator__arrow'>
            { this.props.up ? <div>&#8593;</div> : <div>&#8595;</div> }
          </div>
        </div>
      </Link>
    )
  }
}

