import './Carousel.styl'

import { CSSTransition } from 'react-transition-group'
import * as React from 'react'

interface Props {
  items: JSX.Element[]
}

interface States {
  item?: number,
  prevItem?: number
}

export class Carousel extends React.Component<Props, States> {
  constructor (props: Props) {
    super(props)
    this.state = { item: 1 }
  }

  public componentDidMount () {
    setInterval(() => this.setState({
      item: this.state.item < this.props.items.length
        ? this.state.item + 1 : 1,
      prevItem: this.state.item
    }), 3000)
  }

  public render () {
    const items = this.props.items
    return (
      <div
        className='carousel'
      >
        <div className='carousel__stage'>
          <CSSTransition
            key={`transition_carousel_${this.state.item}`}
            in
            appear
            timeout={500}
            classNames='fade'
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
