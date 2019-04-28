import './AppLayout.styl'

import * as React from 'react'
import { Navigator } from './Navigator.react'
import { RightMenu } from './RightMenu.react'


interface Props {
  children: JSX.Element
  firstPage?: boolean
}

export class AppLayout extends React.Component<Props, {}> {
  public render () {
    return (
      <div className='app-layout'>
        <div className='app-layout__flash'>
          This is still in progress, there is so much more to come...
        </div>
        <div className='app-layout__body'>
          { this.props.children }
        </div>
        <div className='app-layout__side-bar'>
          <RightMenu />
          {
            !this.props.firstPage && (
              <div className='app-layout__navigator'>
                <Navigator up to='/'>Back to top</Navigator>
              </div>
            )
          }
        </div>
      </div>
    )
  }
}
