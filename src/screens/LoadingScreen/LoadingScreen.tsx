import React, {useEffect} from 'react';
import {View, Text, Appearance} from 'react-native';
import {ScreenContainer} from '../../components/ScreenContainer';
import {ThemeContext} from '../../components/ThemeContext';
import {Theme} from '../../constants';
import styles from './styles';

const Loading: React.FC = () => {
  const {handleTheme} = React.useContext(ThemeContext);
  const colorScheme = Appearance.getColorScheme();

  const initTheme = () => {
    if (colorScheme === 'dark') {
      handleTheme.setTheme(Theme.dark);
    } else {
      handleTheme.setTheme(Theme.light);
    }
  };

  useEffect(() => {
    initTheme();
  }, []);

  return (
    <ScreenContainer>
      <View>
        <Text style={styles.mainText}>Loading Screen</Text>
        <Text style={styles.mainText}>
          Testing of enum theme: {handleTheme.theme}, apperance: {colorScheme}
        </Text>
      </View>
    </ScreenContainer>
  );
};

export default Loading;
