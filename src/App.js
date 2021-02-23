import logo from './logo.svg';
import React from 'react'
import './App.css';
import { ThemeContext } from './utils/themeContext'
import Search from './components/search/Search'

import { Sun } from 'react-feather';
import { Moon } from 'react-feather';

/**
 * Root Component which hold the Toggle logic and Search component
 */
function App() {
  const { theme, dark, toggle, isPageLoaded } = React.useContext(ThemeContext);
  if(!isPageLoaded) {
    return false;
  }
  return (
    <div className="App">
      <header className="App-header"
        style={{ backgroundColor: theme.backgroundColor, color: theme.color }}>
        <div className='theme-container'>
          <span className="sun-moon" onClick={toggle}>
            <span>{!dark ? 'Dark' : 'Light'} theme</span>
            {!dark? <Moon/>:<Sun/>}
          </span>
        </div>
        
        <div className={`theme${dark ? 'Dark' : 'Light'}`}>
          <Search/>
        </div>       
      </header>
    </div>
  );
}

export default App;
