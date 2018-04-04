import React from 'react'
import expect from 'expect'
import Enzyme, { shallow, mount } from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import Repeater from '../src/index'

Enzyme.configure({ adapter: new Adapter() })

const n = 100;
const wrapper = mount(<Repeater n={n}><p>Hello</p></Repeater>)

describe('Repeater', () => {
  it(`renders ${n} children`, () => {
    expect(wrapper.children()).toHaveLength(n)
  })
})
