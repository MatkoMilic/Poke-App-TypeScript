import React, {useEffect} from 'react';
import {Appearance, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  OnboardingStackParamList,
  RootNavigatorParamsList,
} from '../../constants';
import {ThemeContext} from '../../components/ThemeContext';
import {Theme} from '../../constants';
import styles from './styles';
import {CompositeNavigationProp} from '@react-navigation/native';

interface LoadingProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<OnboardingStackParamList, 'LoadingScreen'>,
    NativeStackNavigationProp<RootNavigatorParamsList>
  >;
}

const Loading: React.FC<LoadingProps> = ({navigation}) => {
  const {setTheme} = React.useContext(ThemeContext);

  const initTheme = () => {
    const colorScheme = Appearance.getColorScheme();
    if (colorScheme === 'dark') {
      setTheme(Theme.dark);
    } else {
      setTheme(Theme.light);
    }
  };

  const chooseNavigator = async () => {
    const isUserLoggedIn = await AsyncStorage.getItem('activeUser');
    if (isUserLoggedIn !== null) {
      setTimeout(() => {
        navigation.replace('MainNavigator', {screen: 'ProfileScreen'});
      }, 2500);
    } else {
      setTimeout(() => {
        navigation.replace('LoginScreen');
      }, 2500);
    }
  };

  useEffect(() => {
    chooseNavigator();
    initTheme();
  }, []);

  return (
    <Image
      source={require('../../assets/logos/2Front-logo-black.png')}
      style={styles.loadingLogo}
      resizeMode="contain"></Image>
  );
};

export default Loading;
