import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {ScreensContainer} from '../../components/ScreensContainer';
import {ThemeContext} from '../../components/ThemeContext';
import {Theme} from '../../constants';
import styles from './styles';

const Loading: React.FC = () => {
  const {theme} = React.useContext(ThemeContext);

  useEffect(() => {}, []);

  return (
    <ScreensContainer>
      <View>
        <Text style={styles.mainText}>Loading Screen</Text>
        <Text style={styles.mainText}>
          Testing of enum theme: {Object.values(Theme)[theme]}
        </Text>
      </View>
    </ScreensContainer>
  );
};

export default Loading;
