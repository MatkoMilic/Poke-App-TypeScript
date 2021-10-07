import React from 'react';
import {View, ViewStyle} from 'react-native';
import {ThemeContext} from '../ThemeContext';
import {styles} from './styles';
import {Theme} from '../../constants';

interface ScreensContainerProps {
  children?: React.ReactNode;
  style?: ViewStyle;
}

const ScreenContainer: React.FC<ScreensContainerProps> = ({
  children,
  style,
}): JSX.Element => {
  const {theme} = React.useContext(ThemeContext);
  const containerTheme =
    theme == Theme.light ? styles.containerlight : styles.containerdark;

  return (
    <View style={[styles.container, containerTheme as ViewStyle, style]}>
      {children}
    </View>
  );
};

ScreenContainer.defaultProps = {
  children: undefined,
  style: undefined,
};

export default ScreenContainer;
