import React from 'react';

interface IThemeDefinition {
  theme: string;
  toggleTheme: () => void;
}

const defaultThemeValue = {
  theme: '',
  toggleTheme: () => {},
};

export const ThemeContext =
  React.createContext<IThemeDefinition>(defaultThemeValue);
