import './WaterFall.styl'

import React from 'react'
import _ from 'lodash'
import propTypes from 'prop-types'

export default class WaterFall extends React.PureComponent {
  render () {
    const pageWidth = document.getElementsByTagName('body')[0].clientWidth - 100
    const itemsCount = Math.round(pageWidth / 50)
    return (
      <div className='water-fall' onClick={this.props.onStopWaterFall}>
        {
          _.range(itemsCount).map((index) => {
            const duration = Math.floor(Math.random() * 10) + 1
            const delay = Math.floor(Math.random() * 5)
            const randomItem = Math.round(Math.random())
            const item = randomItem > 0 ? {
              source: require('./octocat.png'),
              href: 'https://github.com/princesspoopan'
            } : {
              source: require('./linkedIn.png'),
              href: 'https://www.linkedin.com/princesspoopan'
            }
            return (
              <a
                key={`water-fall-item__${index}`}
                href={item.href}
              >
                <img
                  src={item.source}
                  className='water-fall__item'
                  style={{
                    left: `${50 * index + 50}px`,
                    animation: `spin 2s infinite linear, fall ${duration}s infinite linear`,
                    animationDelay: `${delay}s`
                  }}
                />
              </a>
            )
          })
        }
      </div>
    )
  }
}

WaterFall.PropTypes = {
  onStopWaterFall: propTypes.func.isRquired
}
