import React from 'react';
import { shallow } from 'enzyme';
import Header from "../Header";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

configure({adapter: new Adapter()});

it('should render Loading component without errors', () => {
    const headerParam = {
        'HeaderType': 'h2',
        'headingTxt':'I am header text',
        'customClass': 'testClass'
    }
    const wrapper = shallow(<Header {...headerParam} />);
    expect(wrapper.props('headerParam')['children'][1].props.children).toEqual('I am header text');
    expect(wrapper.props('headerParam')['children'][1].type).toEqual('h2');
});