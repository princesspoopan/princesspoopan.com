import CV from './CV.react'
import React from 'react'
import { expect } from 'chai'
import { render } from 'enzyme'

describe('<CV />', () => {
  it('renders .cv', () => {
    const wrapper = render(<CV onStartWaterFall={() => { }} />)
    expect(wrapper.find('.cv').length).to.equal(1)
  })
})
