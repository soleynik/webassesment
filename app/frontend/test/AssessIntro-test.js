import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import AssessIntro from '../src/components/AssessIntro';

describe("AssessIntro", function() {
    it("AssessIntro contains top-logo", function() {
        const wrapper = shallow(<AssessIntro/>);
        expect(wrapper.find('.top-logo')).to.have.length(2);
    });

    it("AssessIntro contains row", function() {
        const wrapper = shallow(<AssessIntro/>);
        expect(wrapper.find('.row')).to.have.length(1);
    });

    it("AssessIntro contains content", function() {
        const wrapper = shallow(<AssessIntro/>);
        expect(wrapper.find('.content')).to.have.length(1);
    });

    it("AssessIntro contains li", function() {
        const wrapper = shallow(<AssessIntro/>);
        expect(wrapper.find('li')).to.have.length(5);
    });

    it("AssessIntro contains ul", function() {
        const wrapper = shallow(<AssessIntro/>);
        expect(wrapper.find('ul')).to.have.length(1);
    });

    it("AssessIntro contains quiz-info-content", function() {
        const wrapper = shallow(<AssessIntro/>);
        expect(wrapper.find('.quiz-info-content')).to.have.length(1);
    });

    it("AssessIntro contains h4", function() {
        const wrapper = shallow(<AssessIntro/>);
        expect(wrapper.find('h4')).to.have.length(1);
    });


    it("AssessIntro contains p", function() {
        const wrapper = shallow(<AssessIntro/>);
        expect(wrapper.find('p')).to.have.length(3);
    });

    it("AssessIntro contains span", function() {
        const wrapper = shallow(<AssessIntro/>);
        expect(wrapper.find('span')).to.have.length(3);
    });


    it("AssessIntro contains Link", function() {
        const wrapper = shallow(<AssessIntro/>);
        expect(wrapper.find('Link')).to.have.length(1);
    });
});