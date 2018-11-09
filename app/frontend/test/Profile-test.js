import React from 'react';
import { mount, shallow, render } from 'enzyme';
import {expect} from 'chai';
import Profile from '../src/components/Profile';

describe("Profile", function() {

    it("Profile contains user content", function(){
        var params = {title: 'test'};
        const wrapper = render(<Profile route={params}/>);
        expect(wrapper.find('h2')).to.be.length(0);
    });
});
