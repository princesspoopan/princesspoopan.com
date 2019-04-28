import './DetailList.styl'
import * as React from 'react'


interface Props {
  items: Array<{icon: string, children: JSX.Element | string}>
}

export const DetailList = ({ items }: Props) => {
  return (
    <div className='detail-list'>
      {
        items.map((item, index) => (
          <div key={`detail-list-item-${index + 1}`} className='detail-list__item'>
            <i className={`detail-list__item-icon fa fa-${item.icon}`} aria-hidden='true'></i>
            <span className='detail-list__item-text'>
              { item.children }
            </span>
          </div>
        ))
      }
    </div>
  )
}
