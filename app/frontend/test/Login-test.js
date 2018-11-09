
import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Login from '../src/components/Login';

describe("Login", function() {
    it("Login contains input", function() {
        const wrapper = shallow(<Login/>);
        expect(wrapper.find('input')).to.have.length(4);
    });

    it("Login contains button", function() {
        const wrapper = shallow(<Login/>);
        expect(wrapper.find('button')).to.have.length(1);
    });

    it("Login contains images", function() {
        const wrapper = shallow(<Login/>);
        expect(wrapper.find('img')).to.have.length(3);
    });


    // it("wrong username or password", function(){
    //     const wrapper = shallow(<Login/>);
    //     expect(wrapper.state('warning')).to.equal("");
    // });
});

