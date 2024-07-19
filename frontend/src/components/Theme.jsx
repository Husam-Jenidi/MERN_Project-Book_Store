import React from 'react';
import { FaSun, FaMoon } from 'react-icons/fa';
import { useTheme } from './ThemeContext';

const Theme = () => {
  const { theme, isSwitching, switchTheme } = useTheme();

  return (
    <div className='flex justify-center items-center gap-x-4 '>
      {theme === 'dark' ? (
        <FaSun
          className={`cursor-pointer hover:text-gray-300 ${isSwitching ? 'animate-fadeIn' : ''}`}
          onClick={() => switchTheme('light')}
        />
      ) : (
        <FaMoon
          className={`cursor-pointer hover:text-slate-500 ${isSwitching ? 'animate-fadeIn' : ''}`}
          onClick={() => switchTheme('dark')}
        />
      )}
    </div>
  );
};

export default Theme;
