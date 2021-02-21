import React from 'react';
import { shallow } from 'enzyme';
import ErrorHandler from "../ErrorHandler";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

configure({adapter: new Adapter()});

it('should render Error Page without errors', () => {
    const wrapper = shallow(<ErrorHandler />);
    expect(wrapper.exists()).toBe(true);
});

it('Error Page should display passed error message', () => {
    const ERR_MSG = 'Test Error Message';
    const wrapper = shallow(<ErrorHandler errMsg = {ERR_MSG} />);
    expect(wrapper.props('errMsg')['children']).toEqual(ERR_MSG);
});