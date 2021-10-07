import React, {FC} from 'react';
import {ThemeContext} from '../ThemeContext';
import {Theme} from '../../constants';

interface ThemeProviderProps {
  children?: React.ReactNode;
}

export const ThemeProvider: FC<ThemeProviderProps> = ({children}) => {
  const [theme, setTheme] = React.useState<Theme>(Theme.light);

  const toggleTheme = () => {
    if (theme === Theme.light) {
      setTheme(Theme.dark);
    } else {
      setTheme(Theme.light);
    }
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};

ThemeProvider.defaultProps = {
  children: undefined,
};
