import './DetailList.styl'

import React from 'react'
import propTypes from 'prop-types'

export default function DetailList ({ items }) {
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

DetailList.propTypes = {
  items: propTypes.array
}
