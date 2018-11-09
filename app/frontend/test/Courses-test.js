import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Courses from '../src/components/Courses';

describe("Courses", function() {
    it("Courses contains h2", function() {
        const wrapper = shallow(<Courses/>);
        expect(wrapper.find('h2')).to.have.length(1);
    });

    it("Courses contains Foot", function() {
        const wrapper = shallow(<Courses/>);
        expect(wrapper.find('Foot')).to.have.length(0);
    });
});
