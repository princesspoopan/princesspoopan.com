import './RightMenu.styl'

import React from 'react'

export default function RightMenu () {
  return (
    <div className='right-menu'>
      <i className='right-menu__link fa fa-github' aria-hidden="true"></i>
      <i className='right-menu__link fa fa-linkedin' aria-hidden="true"></i>
      <i className='right-menu__link fa fa-skype' aria-hidden="true"></i>
      <i className='right-menu__link fa fa-envelope-o' aria-hidden="true"></i>
    </div>
  )
}
