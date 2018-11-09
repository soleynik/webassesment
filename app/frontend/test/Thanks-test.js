import React from 'react';
import { mount, shallow } from 'enzyme';
import {expect} from 'chai';
import Thanks from '../src/components/Thanks';

describe("Thanks", function() {

    it("Thanks test", function() {
        const routeParam = {title: 'test'};
        const wrapper = shallow(<Thanks route={routeParam}/>);
        expect(wrapper.find('h2')).to.have.length(0);
    });
});
