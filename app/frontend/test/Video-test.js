import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Video from '../src/components/Video';

describe("Video", function() {

    it("Video contains ProgressBar", function() {
        const wrapper = shallow(<Video/>);
        expect(wrapper.find('ProgressBar')).to.have.length(1);
    });


    it("Video contains Record Page", function() {
        const wrapper = shallow(<Video/>);
        expect(wrapper.find('ProgressBar')).to.have.length(1);
    });

    it("Video contains Link", function() {
        const wrapper = shallow(<Video/>);
        expect(wrapper.find('Link')).to.have.length(1);
    });


    it("Video contains div", function() {
        const wrapper = shallow(<Video/>);
        expect(wrapper.find('div')).to.have.length(10);
    });
});
