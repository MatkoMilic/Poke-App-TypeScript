import React, {FC, useEffect} from 'react';
import {Appearance} from 'react-native';
import {ThemeContext} from '../ThemeContext';
import {Theme} from '../../constants';

interface Props {
  children?: React.ReactNode;
}

export const ThemeProvider: FC<Props> = ({children}) => {
  const [theme, setTheme] = React.useState<Theme>(Theme.light);

  const getUserTheme = async () => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === 'dark') {
      setTheme(Theme.dark);
    } else {
      setTheme(Theme.light);
    }
  };

  useEffect(() => {
    getUserTheme();
  }, []);

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
