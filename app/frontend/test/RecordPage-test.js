import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import RecordPage from '../src/components/RecordPage';

describe("RecordPage", function() {


    it("contains video", function() {
        const wrapper = shallow(<RecordPage/>);
        expect(wrapper.find('video')).to.have.length(1);
    });

    it("contains video div", function() {
        const wrapper = shallow(<RecordPage/>);
        expect(wrapper.find('div')).to.have.length(6);
    });


    it("Results contains Link", function() {
        const wrapper = shallow(<RecordPage/>);
        expect(wrapper.find('Link')).to.have.length(1);
    });

});
