import React, {useEffect, useState} from 'react';
import {View, Text, Button, TouchableOpacity} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  MainStackParamList,
  POKELIST_SCREEN,
  PROFILE_SCREEN,
  RootNavigatorParamsList,
  Theme,
} from '../../constants';
import {Header, ScreenContainer, ThemeContext} from '../../components';
import {
  LOGIN_SCREEN,
  navigatorNames,
  getActiveUser,
  getActiveUserValueDetails,
  removeActiveUser,
} from '../../constants';
import {IUserValues} from '../../types';
import styles from './styles';
interface SettingsScreenProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<MainStackParamList>,
    NativeStackNavigationProp<RootNavigatorParamsList>
  >;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({navigation}) => {
  const [currentUser, setCurrentUser] = useState('');
  const [currentUserDetails, setCurrentUserDetails] = useState<
    IUserValues | undefined
  >(undefined);
  const {setTheme, theme} = React.useContext(ThemeContext);

  const setUserDetails = async () => {
    const loggedUser = await getActiveUser();
    if (loggedUser) setCurrentUser(loggedUser);
    const loggedUserValues = await getActiveUserValueDetails();
    if (loggedUserValues) setCurrentUserDetails(loggedUserValues);
  };

  useEffect(() => {
    setUserDetails();
  }, []);

  const logoutUser = async () => {
    removeActiveUser();
    navigation.replace(navigatorNames.ONBOARDING_NAVIGATOR, {
      screen: LOGIN_SCREEN,
    });
  };

  const deleteUser = async () => {
    await AsyncStorage.removeItem(currentUser);
    removeActiveUser();
    navigation.replace(navigatorNames.ONBOARDING_NAVIGATOR, {
      screen: LOGIN_SCREEN,
    });
  };

  const ChangeTheme = () => {
    const userData = currentUserDetails;
    AsyncStorage.setItem(currentUser, JSON.stringify(userData));
    if (theme == Theme.dark) {
      setTheme(Theme.light);
    } else if (theme == Theme.light) {
      setTheme(Theme.dark);
    }
  };

  return (
    <ScreenContainer>
      <Header
        navigation={navigation}
        leftButtonScreenName={PROFILE_SCREEN}
        rightButtonScreenName={POKELIST_SCREEN}
        leftScreenTitle="Profile"
        rightScreenTitle="Pokemons"
      />
      <View>
        <Button title="LOG OUT" onPress={logoutUser}></Button>
        <Text
          style={
            theme == Theme.light
              ? styles.welcomeTextLight
              : styles.welcomeTextDark
          }>
          Welcome {currentUserDetails?.email}
        </Text>
      </View>
      <Button title="Change Theme" onPress={ChangeTheme} />
      <TouchableOpacity onPress={deleteUser}>
        <Text style={styles.deleteButton}>DELETE YOUR ACCOUNT</Text>
      </TouchableOpacity>
    </ScreenContainer>
  );
};

export default SettingsScreen;
