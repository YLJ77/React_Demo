import React from 'react'
import {configure, shallow} from 'enzyme'
import Adapter from 'enzyme-adapter-react-16'
import FunctionBaseComp from './funBaseComp'
import Foo from './Foo'

configure({adapter: new Adapter()});

describe('<FunBaseComp/>', () => {
    let wrapper;
    beforeEach(() => {
        wrapper = shallow(<FunctionBaseComp/>);
    })
    it('should have msg prop', () => {
        wrapper.setProps({msg: 'foo'});
        expect(wrapper.find(Foo)).toHaveLength(1)
    })
})