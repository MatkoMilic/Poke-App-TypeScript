import React, {FC, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import OnBoarding from '../OnBoardingNavigator/OnBoardingNavigator';
import MainNavigatorStack from '../MainNavigator/MainNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootNavigator: FC = () => {
  const [user, setUser] = useState<any>(null);
  const isUserLoggedIn = () => {};

  return (
    <NavigationContainer>
      {
        //if user is logged in MainNavigatorStack will start logic will be here
        <OnBoarding />
      }
    </NavigationContainer>
  );
};

export default RootNavigator;
