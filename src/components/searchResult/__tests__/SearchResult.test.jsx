import React from 'react';
import { shallow, mount } from 'enzyme';
import SearchResult from "../SearchResult";
import Adapter from '@wojtekmaj/enzyme-adapter-react-17';
import { MockedProvider,wait } from '@apollo/client/testing';
import { configure } from 'enzyme';
import { act } from 'react-dom/test-utils';
import { GITHUB_REPO_SEARCH_QUERY } from '../../../utils/grpahQlQuerys';

configure({ adapter: new Adapter() });

const mockSearchResult = {
    request: { query: GITHUB_REPO_SEARCH_QUERY },
    result: {"data":{"user":{"repositories":{"totalCount":7,
    "nodes":[{"description":"A PhpMyAdmin Theme with border radii and box shadows","name":"blueorange","url":"https://github.com/te/blueorange","__typename":"Repository"}]
    }}}}
  };

it('should show a spinner when loading the data', async () => {
    let wrapper;
    await act(async () => {
        wrapper = mount(
            <MockedProvider addTypename={false} mocks={[]} resolvers={{}}>
                <SearchResult />
            </MockedProvider>
        );
    });

    expect(wrapper).toBeTruthy();
    expect(wrapper.find('Loading').length).toEqual(1);
    expect(wrapper.find('ErrorHandler').length).toEqual(0);
});

it('should successfully display the character data', async () => {
    let wrapper;
    await act(async () => {
      // Mount the component
      wrapper = mount(
        <MockedProvider addTypename={false} mocks={[mockSearchResult]} resolvers={{}}>
          <SearchResult />
        </MockedProvider>
      );
      // Wait until the query is resolved
      wrapper.update();
    });
    console.log(wrapper)
    expect(wrapper.props().mocks[0].result.data.user.repositories.nodes.length).toEqual(1);
  });