import React, {useEffect, useState} from 'react';
import {View, Text, Button} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {MainStackParamList, RootNavigatorParamsList} from '../../constants';
import {ScreenContainer} from '../../components';

interface SettingsScreenProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<MainStackParamList, 'SettingsScreen'>,
    NativeStackNavigationProp<RootNavigatorParamsList>
  >;
}

const SettingsScreen: React.FC<SettingsScreenProps> = ({navigation}) => {
  const [currentUser, setCurrentUser] = useState('');
  const [currentUserDetails, setCurrentUserDetails] = useState({});

  const getUserDetails = async () => {
    const value = await AsyncStorage.getItem('activeUser');
    if (value) {
      setCurrentUser(value);
      const getUserValueDetails = await AsyncStorage.getItem(value);
      if (getUserValueDetails) {
        const getUserDetailsParsed = JSON.parse(getUserValueDetails);
        setCurrentUserDetails(getUserDetailsParsed);
      }
    }
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

export default SettingsScreen;
