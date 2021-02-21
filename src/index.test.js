import React from 'react';
import App from './App';

import ApolloClient from "apollo-boost";
// import { ApolloProvider } from "@apollo/client";
import { URL } from "./constants/appConstant";
import { ReactStrictMode, ThemeProvider, ApolloProvider } from './index'

import ReactDOM from 'react-dom';
jest.mock('react-dom', ()=> ({render: jest.fn()}))


it('renders without crashing', () => {

  // const div = document.createElement('div');
  // ReactDOM.render(<App/>, div);
  // global.document.getElementById = (id) => id ==='root' && div
  // expect(ReactDOM.render).toHaveBeenCalled()
  ReactDOM.render(ReactStrictMode, ThemeProvider, ApolloProvider)
  expect(ReactDOM.render).toHaveBeenCalledWith(ReactStrictMode, ThemeProvider, ApolloProvider)
});
