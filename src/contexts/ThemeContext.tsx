import React, { createContext, useState, useContext, useEffect } from 'react'

type ModeType = 'dark' | 'light'

interface ThemeProps {
  mode: ModeType;
  toggleMode: () => void;
}

const ThemeContext = createContext({} as ThemeProps)

export const ThemeProvider: React.FC = ({ children }) => {
  const [mode, setMode] = useState<ModeType>(localStorage.getItem('@supertodo/thememode') as ModeType || 'light')

  useEffect(() => {
    if (mode === 'light') {
      document.body.classList.remove('theme-dark')
      document.body.classList.add('theme-light')        
    } else {
      document.body.classList.remove('theme-light')
      document.body.classList.add('theme-dark')    
    } 
  }, [mode])

  const toggleMode = () => {
    const newMode = mode === 'dark' ? 'light' : 'dark'

    localStorage.setItem('@supertodo/thememode', newMode)

    setMode(newMode)
  }

  return (
    <ThemeContext.Provider value={{ mode, toggleMode }}>
      {children}
    </ThemeContext.Provider>
  )
}

export const useTheme = () => {
  const context = useContext(ThemeContext)

  return context
}