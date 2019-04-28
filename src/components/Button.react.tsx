import './Button.styl'

import { Link } from 'react-router-dom'
import * as React from 'react'

interface Props {
  children: JSX.Element | string,
  to?: string,
  href?: string
}

export class Button extends React.Component<Props, {}> {
  public render () {
    return this.props.href ? (
      <a className='button' target='blank' href={this.props.href} >{this.props.children}</a>
    ) : (
      <Link className='button' to={this.props.to}>{ this.props.children }</Link>
    )
  }
}
