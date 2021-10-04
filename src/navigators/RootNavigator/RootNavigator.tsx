import React, {FC, useState} from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Onboarding from '../OnboardingNavigator/OnboardingNavigator';
import MainNavigator from '../MainNavigator/MainNavigator';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const RootStack = createNativeStackNavigator();

const RootNavigator: FC = () => {
  const [user, setUser] = useState<any>(null);
  const isUserLoggedIn = () => {};

  return (
    <RootStack.Navigator initialRouteName="OnboardingStackNavigator">
      <RootStack.Screen
        name="OnboardingStackNavigator"
        component={Onboarding}
      />
      <RootStack.Screen name="MainStackNavigator" component={MainNavigator} />

      {/* if user is logged in MainNavigatorStack will start logic will be here */}
    </RootStack.Navigator>
  );
};

export default RootNavigator;
