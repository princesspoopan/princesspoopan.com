import './PeriodList.styl'

 import React from 'react'

interface Props {
  items: Array<{
    key: string,
    header: React.ReactNode,
    subHeader?: React.ReactNode,
    text?: React.ReactNode
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
