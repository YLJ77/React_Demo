import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FunctionBaseComp from './funBaseComp'
import Foo from './Foo'

configure({adapter: new Adapter()});

describe('<FunBaseComp/>', () => {
    it('should have msg prop', () => {
        const wrapper = shallow(<FunctionBaseComp/>);
        expect(wrapper.find(Foo)).toHaveLength(1)
    })
})