import React from 'react';
import {View, ViewStyle} from 'react-native';
import {ThemeContext} from '../ThemeContext';
import {styles} from './styles';
import {Theme} from '../../constants';

interface ScreenContainerProps {
  children?: React.ReactNode;
  style?: ViewStyle;
}

const ScreenContainer: React.FC<ScreenContainerProps> = ({
  children,
  style,
}): JSX.Element => {
  const {handleTheme} = React.useContext(ThemeContext);
  const containerTheme =
    handleTheme.theme == Theme.light
      ? styles.containerlight
      : styles.containerdark;

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
