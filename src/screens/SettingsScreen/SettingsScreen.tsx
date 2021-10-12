import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList, RootNavigatorParamsList} from '../../constants';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScreenContainer} from '../../components';

interface SettingsProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<MainStackParamList, 'SettingsScreen'>,
    NativeStackNavigationProp<RootNavigatorParamsList>
  >;
}

const Settings: React.FC<SettingsProps> = ({navigation}) => {
  const [currentUser, setCurrentUser] = useState('');
  const [currentUserDetails, setCurrentUserDetails] = useState({});

  const getUserDetails = async () => {
    const value = await AsyncStorage.getItem('activeUser');
    //Please tell me is this the
    //proper way of handling passing string OR null to
    //a string state in TS, or is there a better way?:
    value !== null ? setCurrentUser(value) : null;
    const getUserValueDetails =
      value !== null ? await AsyncStorage.getItem(value) : null;
    const getUserDetailsParsed =
      getUserValueDetails !== null ? JSON.parse(getUserValueDetails) : null;
    setCurrentUserDetails(getUserDetailsParsed);
  };

  useEffect(() => {
    getUserDetails();
  }, []);

  const logoutUser = async () => {
    await AsyncStorage.removeItem('activeUser');
    navigation.replace('OnboardingNavigator', {screen: 'LoginScreen'});
  };

  return (
    <ScreenContainer>
      <View>
        <Button title="LOG OUT" onPress={logoutUser}></Button>
        <Text>Settings Screen</Text>
      </View>
    </ScreenContainer>
  );
};

export default Settings;
