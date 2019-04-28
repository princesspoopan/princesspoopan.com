import './BoxContainer.styl'

import * as React from 'react'

interface Props {
  children: JSX.Element,
  width?: string,
  height?: string
}

export const BoxContainer = (props: Props) => {
  const style = { width: props.width || 'auto', height: props.height || 'auto' }
  return (
    <div className='box-container' style={style}>{ props.children }</div>
  )
}
