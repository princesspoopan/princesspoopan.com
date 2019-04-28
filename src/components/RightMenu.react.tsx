import './RightMenu.styl'

import * as React from 'react'

export function RightMenu () {
  return (
    <div className='right-menu'>
      <a target='tab' href='https://github.com/princesspoopan'>
        <i className='right-menu__link fa fa-github' aria-hidden='true'></i>
      </a>
      <a target='tab' href='https://www.linkedin.com/in/princesspoopan'>
        <i className='right-menu__link fa fa-linkedin' aria-hidden='true'></i>
      </a>
      <a target='tab' href='mailto://krongkarn.jitsil@gmail.com?subject=I%20want%20to%20hire%20you'>
        <i className='right-menu__link fa fa-envelope-o' aria-hidden='true'></i>
      </a>
    </div>
  )
}
