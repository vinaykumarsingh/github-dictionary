import React from 'react';
import { mount } from 'enzyme';
import {ThemeProvider} from "../themeContext";
import { THEMES } from '../../constants/appConstant'
import App from '../../App';
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { configure } from 'enzyme';

configure({adapter: new Adapter()});

it('should render ThemeProvider without errors', () => {
    const initialState = {
        'dark': false,
        'theme': THEMES.light,
        'toggle': () => { }
    }
    const ThemeContext = React.createContext(initialState)
    const toggle = jest.fn();
    const theme = 'Light';
    const dark = true;
    const wrapper = mount(
      <ThemeContext.Provider value={{ theme, dark, toggle }}>
        <App />
      </ThemeContext.Provider>
    )
});

it('should render ThemeProvider without errors2', () => {
    const wrapper = mount(<ThemeProvider />);
});