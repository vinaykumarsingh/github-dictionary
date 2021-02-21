import React from 'react';
import { shallow } from 'enzyme';
import SearchInputControl from "../searchInputControl/SearchInputControl";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

configure({ adapter: new Adapter() });

it('should render SearchInputControl component without errors', () => {
    const inputParam = {
        'searchTxt': 'test user',
        'setSearchTxt': function () {
            return '';
        },
        'defaultSearchTxt': 'Default SearchTxt',
        'placeholder': 'Sample Placeholder'
    }
    const wrapper = shallow(<SearchInputControl {...inputParam} />);
    expect(wrapper.props().children.props.className).toEqual('SearchInputControl');
    expect(wrapper.props().children.props.children.length).toEqual(3);
    expect(wrapper.props().children.props.children[1].type).toEqual('input');
});