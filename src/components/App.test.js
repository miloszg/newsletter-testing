import React from 'react'
import App from '../components/App';
import {shallow} from 'enzyme';
import {findByTestArr} from '../Utils';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new EnzymeAdapter,
    disableLifecycleMethods: true
});

const setUp = () => {
    const wrapper = shallow(<App/>)
    return wrapper
}

describe('App COmponent',()=>{
    let wrapper;

    beforeEach(()=>{
        wrapper=setUp();
    })

    it('should render without error',()=>{
        const component = findByTestArr(wrapper,"appComponent");
        expect(component.length).toBe(1);
    })

});