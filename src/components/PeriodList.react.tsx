import './PeriodList.styl'

import * as React from 'react'

interface Props {
  items: Array<{
    key: string,
    header: JSX.Element | string,
    subHeader?: JSX.Element | string,
    text?: JSX.Element | string
  }>
}

export const PeriodList = ({ items }: Props) => {
  return (
    <div className='period-list'>
      {
        items.map((item) => (
          <div
            key={`period-list-${item.key}`}
            className='period-list__item'
          >
            <div className='period-list__item-header'>
              {item.header}
            </div>
            <div className='period-list__item-sub-header'>
              {item.subHeader}
            </div>
            {
              item.text && (
                <div className='period-list__item-additional-text'>
                  {item.text}
                </div>
              )
            }
          </div>
        ))
      }
    </div>
  )
}
