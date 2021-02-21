import React from 'react';
import PropTypes from 'prop-types'
import "./searchInputControl.scss";
import { Search } from 'react-feather';
import { Delete } from 'react-feather';

/**
 * 
 * @param {*} props Component used by user to search searchgithub usernames
 */
const SearchInputControl = props => {
    const { searchTxt, setSearchTxt, defaultSearchTxt, placeholder } = props;

    return (
        <div>
            <div className="SearchInputControl">
                <Search alt="search-icon" aria-hidden={true} className="search-icon" />
                <input
                    className='searchInputBox'
                    placeholder={placeholder}
                    aria-label="Type Username to Search"
                    type="text"
                    tabIndex={1}
                    value={searchTxt}
                    onChange={e => setSearchTxt(e.target.value)}
                />
                <Delete
                    alt="clear-button"
                    className="delete-icon"
                    onClick={() => setSearchTxt(defaultSearchTxt)}
                />
            </div>
        </div>
    )
}

SearchInputControl.propTypes = {
    //username of the Github user
    searchTxt: PropTypes.string,
    //hook to update the state of searchTxt
    setSearchTxt: PropTypes.func,
    //default text to fetch the results from Github, without user input
    defaultSearchTxt: PropTypes.string,
    //placeholder to display inside searchbar
    placeholder: PropTypes.string.isRequired,
}

export default SearchInputControl