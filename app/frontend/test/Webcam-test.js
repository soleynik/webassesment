import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Video from '../src/components/Webcam';

describe("Webcam", function() {

it('should be a video item', () => {
    const wrapper = shallow(<Video/>);	
    expect(wrapper.type()).to.eql('video');
  });

   it('should have an video to display', function () {
    const wrapper = shallow(<Video/>);
    expect(wrapper.find('video')).to.have.length(1);
  });

 it('should have props for src', function () {
    const wrapper = shallow(<Video/>);
    expect(wrapper.props().src).to.be.defined;
  });


});
