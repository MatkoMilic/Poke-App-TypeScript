import React, {FC} from 'react';
import {useEffect} from 'react';
import {Appearance} from 'react-native';
import {ThemeContext} from '../ThemeContext';

interface Props {
  children?: React.ReactNode;
}

export const ThemeProvider: FC<Props> = ({children}) => {
  const [theme, setTheme] = React.useState<string>('');

  const getUserTheme = async () => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === 'dark') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  useEffect(() => {
    getUserTheme();
  }, []);

  const toggleTheme = () => {
    if (theme === 'light') {
      setTheme('dark');
    } else {
      setTheme('light');
    }
  };

  return (
    <ThemeContext.Provider value={{theme, toggleTheme}}>
      {children}
    </ThemeContext.Provider>
  );
};
