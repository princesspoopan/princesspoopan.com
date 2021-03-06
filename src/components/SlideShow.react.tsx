import './SlideShow.styl'

import { CSSTransition } from 'react-transition-group'
import ClassNames from 'classnames'
import * as React from 'react'

interface Props {
  slides: JSX.Element[],
  backward?: boolean,
  renderButtons?: any
}

interface States {
  slide?: number,
  prevSlide?: number
}

export class SlideShow extends React.Component<Props, States> {
  public state: States
  public props: Props
  constructor (props: Props) {
    super(props)
    this.state = { slide: props.backward ? props.slides.length : 1 }
  }

  public render () {
    const slides = this.props.slides
    const prevButtonCl = ClassNames('slide-show__button', {
      '--active': this.state.slide > 1
    })
    const nextButtonCl = ClassNames('slide-show__button', {
      '--active': this.state.slide < slides.length
    })
    return (
      <div className='slide-show'>
        <div className='slide-show__stage'>
          {
            this.state.prevSlide && (
              <CSSTransition
                key={`transition_slide_${this.state.prevSlide}`}
                in
                appear
                timeout={500}
                classNames='slide'
              >
                <div
                  className={`slide-show__item ${
                    this.state.prevSlide > this.state.slide
                      ? '--slide-out-left'
                      : '--slide-out-right'
                  }`}
                >
                  { slides[this.state.prevSlide - 1] }
                </div>
              </CSSTransition>
            )
          }
          <CSSTransition
            key={`transition_slide_${this.state.slide}`}
            in
            appear
            timeout={500}
            classNames='slide'
          >
            <div
              className={`slide-show__item ${
                this.state.prevSlide
                  ? this.state.prevSlide > this.state.slide
                    ? '--slide-in-left'
                    : '--slide-in-right'
                  : ''
              }`}
            >
              { slides[this.state.slide - 1] }
            </div>
          </CSSTransition>
        </div>
        {
          this.props.renderButtons([
            <div
              key='prevButton'
              className={prevButtonCl}
              onClick={() => {
                this.setState({
                  slide: this.state.slide - 1,
                  prevSlide: this.state.slide
                })
              }}
            >
              &#x2190;
            </div>,
            <div
              key='nextButton'
              className={nextButtonCl}
              onClick={() => {
                this.setState({
                  slide: this.state.slide + 1,
                  prevSlide: this.state.slide
                })
              }}
            >
              &#x2192;
            </div>
          ])
        }
      </div>
    )
  }
}
