import React from 'react'
import Homepage from './Homepage';
import {shallow} from 'enzyme';
import {findByTestArr} from '../../Utils';
import Enzyme from 'enzyme';
import EnzymeAdapter from 'enzyme-adapter-react-16';

Enzyme.configure({
    adapter: new EnzymeAdapter,
    disableLifecycleMethods: true
});

describe('Homepage Component',()=>{
    describe('Renders',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = shallow(<Homepage/>)
        });

        it('should render a grid',()=>{
            const grid=findByTestArr(wrapper, 'mainGrid');
            expect(grid.length).toBe(1);
        })

        it('should render a typography',()=>{
            const typo=findByTestArr(wrapper, 'typography');
            expect(typo.length).toBe(1);
        })

        it('should render a text field',()=>{
            const textField=findByTestArr(wrapper, 'emailField');
            expect(textField.length).toBe(1);
        })

        it('should render a button',()=>{
            const button=findByTestArr(wrapper, 'sumbitButton');
            expect(button.length).toBe(1);
        }) 
    })

    describe('Testing Homepage Methods',()=>{
        let wrapper;
        beforeEach(()=>{
            wrapper = shallow(<Homepage/>).childAt(0).dive();
        });

        it('validateEmail Method should return True if email is correct',()=>{
            const classInstance = wrapper.instance();
            let email='test@test.com';
            const bool=classInstance.validateEmail(email);
            expect(bool).toBe(true);

        });

    });
})

