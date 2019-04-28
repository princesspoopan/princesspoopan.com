import './Menu.styl'

import ClassNames from 'classnames'
import * as React from 'react'

interface Props {
  selectedMenu?: string,
  white?: boolean
}

export class Menu extends React.Component<Props, {}> {
  public render () {
    const className = ClassNames('menu', {
      '--white': this.props.white
    })

    return (
      <div className={className}>
        <div className='menu__icon'>
          <div className='menu__icon-top' />
          <div className='menu__icon-middle' />
          <div className='menu__icon-bottom' />
        </div>
        Menu
      </div>
    )
  }
}
