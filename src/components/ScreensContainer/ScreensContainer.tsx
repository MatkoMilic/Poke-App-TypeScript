import React from 'react';
import {View, ViewStyle} from 'react-native';
import {ThemeContext} from '../ThemeContext';
import {styles, Style} from './styles';

interface Props {
  children: React.ReactNode;
  style?: ViewStyle;
}

export const ScreensContainer: React.FC<Props> = ({
  children,
  style,
}): JSX.Element => {
  const {theme} = React.useContext(ThemeContext);
  const stringBasedObjectKeyForContainer = `container${theme}`;
  return (
    <View
      style={[
        styles.container,
        styles[stringBasedObjectKeyForContainer as keyof Style],
        style,
      ]}>
      {children}
    </View>
  );
};
