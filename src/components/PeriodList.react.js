import './PeriodList.styl'

import React from 'react'
import propTypes from 'prop-types'

export default function PeriodList ({ items }) {
  return (
    <div className='period-list'>
      {
        items.map((item) => (
          <div
            key={`period-list-${item.key}`}
            className='period-list__item'
          >
            <div className='period-list__item-header'>
              { item.header }
            </div>
            <div className='period-list__item-sub-header'>
              { item.subHeader }
            </div>
            {
              item.text && (
                <div className='period-list__item-additional-text'>
                  { item.text }
                </div>
              )
            }
          </div>
        ))
      }
    </div>
  )
}

PeriodList.propTypes = {
  items: propTypes.array
}
