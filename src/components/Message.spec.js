import Message from './Message.react'
import React from 'react'
import { expect } from 'chai'
import { render } from 'enzyme'

describe('<Message />', () => {
  it('renders <h1> tag', () => {
    const wrapper = render(<Message />)
    expect(wrapper.find('h1').length).to.equal(1)
  })
})
