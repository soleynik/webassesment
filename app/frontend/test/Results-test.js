import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Results from '../src/components/Results';

describe("Results", function() {
    it("Results contains h4", function() {
        const wrapper = shallow(<Results/>);
        expect(wrapper.find('h4')).to.have.length(3);
    });

    it("Results contains Link", function() {
        const wrapper = shallow(<Results/>);
        expect(wrapper.find('Link')).to.have.length(1);
    });

    it("Results contains ProgressBar", function() {
        const wrapper = shallow(<Results/>);
        expect(wrapper.find('ProgressBar')).to.have.length(1);
    });




});
