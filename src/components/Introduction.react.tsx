import './Introduction.styl'

import ClassNames from 'classnames'
import * as React from 'react'

interface Props {
  white?: boolean
}

export class Introduction extends React.Component<Props, {}> {
  public render () {
    const className = ClassNames('introduction', { '--white': this.props.white })
    return (
      <div className={className}>
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
}
