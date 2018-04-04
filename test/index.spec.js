import React from 'react'
import expect from 'expect'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Repeater from '../src/index'

Enzyme.configure({ adapter: new Adapter() })

const wrapper = mount(<Repeater n={100}><p>Hello</p></Repeater>)

describe('Repeater', () => {
  it('renders 100 children', () => {
    expect(wrapper.children()).toHaveLength(100)
  })
})
