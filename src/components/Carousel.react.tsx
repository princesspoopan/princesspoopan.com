import './Carousel.styl'

import React from 'react'

interface Props {
  items: React.ReactElement[]
}

interface States {
  item: number,
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
    const { items } = this.props
    const { item, prevItem } = this.state
    return (
      <div className='carousel'>
        <div className='carousel__stage'>
          {prevItem !== undefined && (
            <div
              key={`prev_${prevItem}`}
              className='carousel__item --slide-out'
            >
              {items[prevItem - 1]}
            </div>
          )}
          <div
            key={`curr_${item}`}
            className='carousel__item --slide-in'
          >
            {items[item - 1]}
          </div>
        </div>
      </div>
    )
  }
}
