import React from 'react';
import { shallow } from 'enzyme';
import Loading from "../Loading";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

configure({adapter: new Adapter()});

it('should render Loading component without errors', () => {
    const wrapper = shallow(<Loading />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.props().children.props.alt).toEqual('loading...')    
});