import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Quiz from '../src/components/Quiz';

describe("Quiz", function() {
    it("quiz contains button", function() {
        const wrapper = shallow(<Quiz/>);
        expect(wrapper.find('button')).to.have.length(3);
    });

    it("quiz contains radio", function() {
        const wrapper = shallow(<Quiz/>);
        expect(wrapper.find('h4')).to.have.length(1);
    });

    it("initial value", function(){
        const wrapper = shallow(<Quiz/>);
        expect(wrapper.state('currentIndex')).to.equal(0);
        expect(wrapper.state('timer')).to.equal(900);
        expect(wrapper.state('timestring')).to.equal("");
    });

    // it("click previous and next button", function(){
    //     const wrapper = shallow(<Quiz/>);
    //     wrapper.find("#next").simulate('click');
    //     expect(wrapper.state('currentIndex')).to.equal(0);
    //     wrapper.find("#pre").simulate('click');
    //     expect(wrapper.state('currentIndex')).to.equal(0);
    //
    //
    // });

    it("count down timer sets proper state", function() {
        const wrapper = shallow(<Quiz/>);
        var t = 1;
        wrapper.instance().state.timer = t;
        wrapper.instance().countdownTimer();
        t = t - 1;
        var seconds = parseInt(t % 60, 10);
        var minutes = parseInt(t / 60, 10) % 60;
        var seconds = seconds < 10 ? '0' + seconds : seconds;
        var minutes = minutes < 10 ? '0' + minutes : minutes;
        expect(wrapper.state('timer')).to.equal(t);
        expect(wrapper.state('timestring')).to.eql(minutes+":"+seconds);
    });

    it("isFinished null useranswer", function() {
        const wrapper = shallow(<Quiz/>);
        wrapper.instance().state.useranswers = [null];
        wrapper.instance().state.questions = [null];
        expect(wrapper.instance().isFinished()).to.eql(false);
        wrapper.instance().state.useranswers = ["ans1", "ans2"];
        wrapper.instance().state.questions = ["q1", "q2"];
        expect(wrapper.instance().isFinished()).to.eql(false);
    });

    it("select answer sets user answer state", function() {
        const wrapper = shallow(<Quiz/>);
        wrapper.instance().state.useranswers = [1,2];
        wrapper.instance().state.currentIndex = 1;
        wrapper.instance().selectAnswer(1);
        expect(wrapper.state('useranswers')).to.eql([1,2]);
    });

    it("componentDidMount setting countdown", function() {
        const wrapper = shallow(<Quiz/>);
        wrapper.instance().componentDidMount();
        expect(wrapper.state('countdownInstance')).to.be.defined;
    });

});
