import './Carousel.styl'

import CSSTransition from 'react-transition-group/CSSTransition'
import PropTypes from 'prop-types'
import React from 'react'

export default class Carousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = { item: 1 }
  }

  render () {
    const items = [
      'Taskworld',
      'Thomson Reuters'
    ]
    return (
      <div
        className='carousel'
        onClick={() => this.setState({
          item: this.state.item < items.length
            ? this.state.item + 1 : 1,
          prevItem: this.state.item
        })}
      >
        <div className='carousel__stage'>
          {
            this.state.prevItem && (
              <CSSTransition
                key={`transition_carousel_${this.state.prevItem}`}
                in
                appear
                timeout={500}
                classNames="fade"
              >
                <div
                  className='carousel__item --fade-out'
                >
                  { items[this.prevItem - 1] }
                </div>
              </CSSTransition>
            )
          }
          <CSSTransition
            key={`transition_carousel_${this.state.item}`}
            in
            appear
            timeout={500}
            classNames="fade"
          >
            <div
              className='carousel__item --fade-in'
            >
              { items[this.state.item - 1] }
            </div>
          </CSSTransition>
        </div>
      </div>
    )
  }
}

Carousel.propTypes = {
  items: PropTypes.array.isRequired
}