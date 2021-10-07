import React from 'react';
import {Theme} from '../../constants';

interface IThemeDefinition {
  theme: Theme;
  toggleTheme: () => void;
}

const defaultThemeValue = {
  theme: Theme.light,
  toggleTheme: () => {},
};

const ThemeContext = React.createContext<IThemeDefinition>(defaultThemeValue);

export default ThemeContext;
