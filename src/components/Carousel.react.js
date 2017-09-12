import './Carousel.styl'

import CSSTransition from 'react-transition-group/CSSTransition'
import PropTypes from 'prop-types'
import React from 'react'

export default class Carousel extends React.Component {
  constructor (props) {
    super(props)
    this.state = { item: 1 }
  }

  componentDidMount () {
    setInterval(() => this.setState({
      item: this.state.item < this.props.items.length
        ? this.state.item + 1 : 1,
      prevItem: this.state.item
    }), 3000)
  }

  render () {
    const items = this.props.items
    return (
      <div
        className='carousel'
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
