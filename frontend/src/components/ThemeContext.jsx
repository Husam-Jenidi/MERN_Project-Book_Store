import React, { createContext, useState, useEffect, useContext } from 'react';

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
  const initialTheme = localStorage.getItem('theme') || 'light';
  const [theme, setTheme] = useState(initialTheme);
  const [isSwitching, setIsSwitching] = useState(false);

  useEffect(() => {
    if (theme === 'dark') {
      document.body.classList.add('dark');
    } else {
      document.body.classList.remove('dark');
    }
    localStorage.setItem('theme', theme);
  }, [theme]);

  const switchTheme = (newTheme) => {
    setIsSwitching(true);
    setTimeout(() => {
      setTheme(newTheme);
      setIsSwitching(false);
    }, 400); // Match the animation duration
  };

  return (
    <ThemeContext.Provider value={{ theme, isSwitching, switchTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

export const useTheme = () => useContext(ThemeContext);
