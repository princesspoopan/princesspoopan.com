import './AppLayout.styl'

import Navigator from '../components/Navigator.react'
import PropTypes from 'prop-types'
import React from 'react'
import RightMenu from '../components/RightMenu.react'

export default function AppLayout ({ children, firstPage }) {
  return (
    <div className='app-layout'>
      <div className='app-layout__body'>
        { children }
      </div>
      <div className='app-layout__side-bar'>
        <RightMenu />
        {
          !firstPage && (
            <div className='app-layout__navigator'>
              <Navigator to='/'>Back to top</Navigator>
            </div>
          )
        }
      </div>
    </div>
  )
}

AppLayout.propTypes = {
  children: PropTypes.node.isRequired,
  firstPage: PropTypes.bool
}
