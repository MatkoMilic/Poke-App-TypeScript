import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  MainStackParamList,
  RootNavigatorParamsList,
  Theme,
} from '../../constants';
import {ScreenContainer, ThemeContext} from '../../components';
import {
  screenNames,
  navigatorNames,
  getActiveUser,
  getActiveUserValueDetails,
  removeActiveUser,
  UserValues,
} from '../../constants';

interface SettingsScreenProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<MainStackParamList, 'SettingsScreen'>,
    NativeStackNavigationProp<RootNavigatorParamsList>
  >;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({navigation}) => {
  const [currentUser, setCurrentUser] = useState('');
  const [currentUserDetails, setCurrentUserDetails] = useState<
    UserValues | undefined
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
      screen: screenNames.LOGIN_SCREEN,
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
      <View>
        <Button title="LOG OUT" onPress={logoutUser}></Button>
        <Text>Welcome {currentUserDetails?.email}</Text>
        <Text>Settings Screen</Text>
      </View>
      <Button title="Change Theme" onPress={ChangeTheme} />
    </ScreenContainer>
  );
};

export default SettingsScreen;
