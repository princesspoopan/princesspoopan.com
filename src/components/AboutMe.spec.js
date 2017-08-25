import AboutMe from './AboutMe.react'
import React from 'react'
import { expect } from 'chai'
import { render } from 'enzyme'

describe('<AboutMe />', () => {
  it('renders .about-me', () => {
    const wrapper = render(<AboutMe onStartWaterFall={() => { }} />)
    expect(wrapper.find('.about-me').length).to.equal(1)
  })
})
