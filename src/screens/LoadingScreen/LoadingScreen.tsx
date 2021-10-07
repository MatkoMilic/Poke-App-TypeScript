import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {ScreenContainer} from '../../components/ScreenContainer';
import {ThemeContext} from '../../components/ThemeContext';
import {Theme} from '../../constants';
import styles from './styles';

const Loading: React.FC = () => {
  const {theme} = React.useContext(ThemeContext);

  useEffect(() => {}, []);

  return (
    <ScreenContainer>
      <View>
        <Text style={styles.mainText}>Loading Screen</Text>
        <Text style={styles.mainText}>
          Testing of enum theme: {Object.values(Theme)[theme]}
        </Text>
      </View>
    </ScreenContainer>
  );
};

export default Loading;
