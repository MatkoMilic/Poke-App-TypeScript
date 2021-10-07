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

export const ThemeContext =
  React.createContext<IThemeDefinition>(defaultThemeValue);
