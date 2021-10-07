import React from 'react';
import {View, ViewStyle} from 'react-native';
import {ThemeContext} from '../ThemeContext';
import {styles, Style} from './styles';

interface ScreensContainerProps {
  children?: React.ReactNode;
  style?: ViewStyle;
}

const ScreensContainer: React.FC<ScreensContainerProps> = ({
  children,
  style,
}): JSX.Element => {
  const {theme} = React.useContext(ThemeContext);
  const containerTheme = `${
    theme == 'light' ? styles.containerlight : styles.containerdark
  }`;
  //Opened to suggestions on how to use the most efficient solution here
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

export default ScreensContainer;
