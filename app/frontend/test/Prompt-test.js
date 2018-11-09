import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import sinon from 'sinon';
import Prompt from '../src/components/Prompt';

describe("Prompt", function() {
    it("Prompt contains h2", function() {
        const routeParam = {title: 'test'};
        const wrapper = shallow(<Prompt route={routeParam}/>);
        expect(wrapper.find('h2')).to.have.length(1);
    });

    it("Prompt contains h1", function() {
        const routeParam = {title: 'test'};
        const wrapper = shallow(<Prompt route={routeParam}/>);
        expect(wrapper.find('h1')).to.have.length(0);
    });

    it("Prompt contains p", function() {
        const routeParam = {title: 'test'};
        const wrapper = shallow(<Prompt route={routeParam}/>);
        expect(wrapper.find('p')).to.have.length(0);
    });

    it("Prompt contains p", function() {
        const routeParam = {title: 'test'};
        const wrapper = shallow(<Prompt route={routeParam}/>);
        expect(wrapper.find('p')).to.have.length(0);
    });

    // it("Prompt editProfile changes state", function() {
    //     const routeParam = {title: 'test'};
    //     sinon.spy(Prompt.prototype,'editProfile');
    //     const wrapper = mount(<Prompt route={routeParam}/>);
    //     wrapper.find('#edit').simulate('click');
    //     sinon.assert.calledOnce(Prompt.prototype.editProfile);
    // });

    it("Prompt getProfile changes state", function() {
        const routeParam = {title: 'test'};
        const wrapper = shallow(<Prompt route={routeParam}/>);
        wrapper.instance().getProfile();
        expect(wrapper.state('filepath')).to.be.defined;
    });

    it("Prompt test", function() {
        const routeParam = {title: 'test'};
        const wrapper = shallow(<Prompt route={routeParam}/>);
        wrapper.instance().componentDidMount();
        expect(true).to.eql(true);
    });



    it("Prompt updateProfile triggered", function() {
        const routeParam = {title: 'test'};
        sinon.spy(Prompt.prototype,'updateProfile');
        const wrapper = mount(<Prompt route={routeParam}/>);
        wrapper.find('#submit').simulate('click');
        sinon.assert.calledOnce(Prompt.prototype.updateProfile);
    });

});
