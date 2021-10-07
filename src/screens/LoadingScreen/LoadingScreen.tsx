import React, {useEffect} from 'react';
import {View, Text, Appearance} from 'react-native';
import {ScreenContainer} from '../../components/ScreenContainer';
import {ThemeContext} from '../../components/ThemeContext';
import {Theme} from '../../constants';
import styles from './styles';

const Loading: React.FC = () => {
  const {setTheme, theme} = React.useContext(ThemeContext);

  const initTheme = () => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === 'dark') {
      setTheme(Theme.dark);
    } else {
      setTheme(Theme.light);
    }
  };

  useEffect(() => {
    initTheme();
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
