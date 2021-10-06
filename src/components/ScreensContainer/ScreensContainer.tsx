import React from 'react';
import {View, ViewStyle} from 'react-native';
import {ThemeContext} from '../ThemeContext';
import {styles, Style} from './styles';

interface ScreensContainerProps {
  children?: React.ReactNode;
  style?: ViewStyle;
}

//const co = `${styles.button} ${className} ${bold ? styles.buttonBold : ''} ${primary ? styles.buttonPrimary : ''} ${secondary ? styles.buttonSecondary : ''} ${accent ? styles.buttonAccent : ''}`;

export const ScreensContainer: React.FC<ScreensContainerProps> = ({
  children,
  style,
}): JSX.Element => {
  const {theme} = React.useContext(ThemeContext);
  const containerTheme = `${
    theme == 'light' ? styles.containerlight : styles.containerdark
  }`;
  return (
    <View
      style={[styles.container, styles[containerTheme as keyof Style], style]}>
      {children}
    </View>
  );
};

ScreensContainer.defaultProps = {
  children: undefined,
  style: undefined,
};
