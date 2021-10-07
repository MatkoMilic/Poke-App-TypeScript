import React from 'react';
import {Theme} from '../../constants';

interface IThemeDefinition {
  handleTheme: {
    theme: Theme;
    setTheme: (theme: Theme) => void;
  };
}

const defaultThemeValue = {
  handleTheme: {
    theme: Theme.light,
    setTheme: (theme: Theme) => {},
  },
};

const ThemeContext = React.createContext<IThemeDefinition>(defaultThemeValue);

export default ThemeContext;
