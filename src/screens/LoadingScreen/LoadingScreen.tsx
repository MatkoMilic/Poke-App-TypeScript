import React, {useEffect} from 'react';
import {View, Text, Appearance} from 'react-native';
import {ScreenContainer} from '../../components/ScreenContainer';
import {ThemeContext} from '../../components/ThemeContext';
import {Theme} from '../../constants';
import styles from './styles';

const Loading: React.FC = () => {
  const {toggleTheme} = React.useContext(ThemeContext);
  const {theme} = React.useContext(ThemeContext);
  //const [theme, setTheme] = React.useState<Theme>(Theme.light);

  const getUserTheme = () => {
    const colorScheme = Appearance.getColorScheme();

    if (
      (colorScheme === 'dark' && theme == Theme.dark) ||
      (colorScheme === 'light' && theme == Theme.light)
    ) {
      return;
    } else {
      toggleTheme();
    }
  };

  useEffect(() => {
    getUserTheme();
  }, []);

  return (
    <ScreenContainer>
      <View>
        <Text style={styles.mainText}>Loading Screen</Text>
        <Text style={styles.mainText}>Testing of enum theme: {theme}</Text>
      </View>
    </ScreenContainer>
  );
};

export default Loading;
