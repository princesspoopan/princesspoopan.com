import './FrontPage.styl'

import AboutMe from '../components/AboutMe.react'
import React from 'react'
import WaterFall from '../components/WaterFall.react'

export default class FrontPage extends React.PureComponent {
  constructor (props) {
    super(props)
    this.state = {showWaterFall: false}
  }

  render () {
    return (
      <div className='front-page'>
        <div className='front-page__center'>
          <AboutMe onStartWaterFall={() => this.setState({showWaterFall: true})} />
          {
            this.state.showWaterFall && (
              <WaterFall onStopWaterFall={() => this.setState({showWaterFall: false})} />
            )
          }
        </div>
      </div>
    )
  }
}
