import React from 'react'
import { THEMES } from '../constants/appConstant'
const initialState = {
  dark: false,
  theme: THEMES.light,
  toggle: () => { }
}
const ThemeContext = React.createContext(initialState)

/**
 * 
 * @param {*} props Component will be used to toggle between DARK and LIGHT Themes
 */
function ThemeProvider({ children }) {
  const [dark, setDark] = React.useState(false) // Default theme is light
  const [isPageLoaded, setIsPageLoaded] = React.useState(false);
  // On mount, read the preferred theme from the persistence
  React.useEffect(() => {
    const isDark = localStorage.getItem('dark') === 'true';
    setDark(isDark);
    setIsPageLoaded(true)
  }, [dark])

  // To toggle between dark and light modes
  const toggle = () => {
    const isDark = !dark
    localStorage.setItem('dark', JSON.stringify(isDark))
    setDark(isDark)
  }

  // Filter the styles based on the theme selected
  const theme = dark ? THEMES.dark : THEMES.light

  return (
    <ThemeContext.Provider value={{ theme, dark, toggle, isPageLoaded }}>
      {children}
    </ThemeContext.Provider>
  )
}

export { ThemeProvider, ThemeContext }