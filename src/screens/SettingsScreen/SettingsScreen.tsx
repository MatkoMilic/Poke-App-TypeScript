import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  MainStackParamList,
  OnboardingStackParamList,
  RootNavigatorParamsList,
} from '../../constants';
import {ScreenContainer} from '../../components';
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
    navigation.replace(
      navigatorNames.ONBOARDING_NAVIGATOR as keyof RootNavigatorParamsList,
      {screen: screenNames.LOGIN_SCREEN as keyof OnboardingStackParamList},
    );
  };

  return (
    <ScreenContainer>
      <View>
        <Button title="LOG OUT" onPress={logoutUser}></Button>
        <Text>Welcome {currentUserDetails?.email}</Text>
        <Text>Settings Screen</Text>
      </View>
    </ScreenContainer>
  );
};

export default SettingsScreen;
