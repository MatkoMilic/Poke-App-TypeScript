import React, {FC, useState} from 'react';
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
    </RootStack.Navigator>
  );
};

export default RootNavigator;
