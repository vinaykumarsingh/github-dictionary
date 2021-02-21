import React from 'react';
import { shallow } from 'enzyme';
import SearchInputControl from "../searchInputControl/SearchInputControl";
import Search from "../../search/Search";
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
    console.log(wrapper);
    expect(wrapper.props().children.props.className).toEqual('SearchInputControl');
    expect(wrapper.props().children.props.children.length).toEqual(3);
    expect(wrapper.props().children.props.children[1].type).toEqual('input');
});

it('should render Search without errors', () => {
    const wrapper = shallow(<Search />);
    expect(wrapper.props().children[0].props.headingTxt).toEqual('GitHub Dictionary');
    expect(wrapper.props().children[1].props.placeholder).toEqual('GitHub Username');
});