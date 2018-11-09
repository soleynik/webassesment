import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Home from '../src/components/Home';

describe("Home", function() {
    it("Home contains h2", function() {
        const wrapper = shallow(<Home/>);
        expect(wrapper.find('h2')).to.have.length(1);
    });

    it("Home contains Link", function() {
        const wrapper = shallow(<Home/>);
        expect(wrapper.find('Link')).to.have.length(1);
    });
});