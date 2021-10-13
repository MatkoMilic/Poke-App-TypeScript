import React, {useEffect} from 'react';
import {Appearance, Image} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  MainStackParamList,
  navigatorNames,
  OnboardingStackParamList,
  RootNavigatorParamsList,
  screenNames,
} from '../../constants';
import {ThemeContext} from '../../components/ThemeContext';
import {Theme} from '../../constants';
import styles from './styles';
import {CompositeNavigationProp} from '@react-navigation/native';

const logo = require('../../assets/logos/2Front-logo-black.png');

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
        navigation.replace(navigatorNames.MAIN_NAVIGATOR, {
          screen: screenNames.PROFILE_SCREEN,
        });
      }, 2500);
    } else {
      setTimeout(() => {
        navigation.replace(screenNames.LOGIN_SCREEN);
      }, 2500);
    }
  };

  useEffect(() => {
    chooseNavigator();
    initTheme();
  }, []);

  return (
    <Image
      source={logo}
      style={styles.loadingLogo}
      resizeMode="contain"></Image>
  );
};

export default Loading;
