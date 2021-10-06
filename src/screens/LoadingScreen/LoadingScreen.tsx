import React, {useEffect} from 'react';
import {View, Text} from 'react-native';
import {ScreensContainer} from '../../components/ScreensContainer';
import {ThemeContext} from '../../components/ThemeContext';

const Loading: React.FC = () => {
  const {theme} = React.useContext(ThemeContext);

  useEffect(() => {}, []);

  return (
    <ScreensContainer>
      <View>
        <Text>Loading Screen</Text>
        <Text>Testing of theme: {theme}</Text>
      </View>
    </ScreensContainer>
  );
};

export default Loading;
