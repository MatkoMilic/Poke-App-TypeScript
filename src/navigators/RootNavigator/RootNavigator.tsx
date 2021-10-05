import React, {FC, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingNavigator} from '../OnboardingNavigator';
import {MainNavigator} from '../MainNavigator';

const RootStack = createNativeStackNavigator();

const RootNavigator: FC = () => {
  const [user, setUser] = useState<any>(null);
  const isUserLoggedIn = () => {};

  return (
    <RootStack.Navigator initialRouteName="OnboardingNavigator">
      <RootStack.Screen
        name="OnboardingNavigator"
        component={OnboardingNavigator}
      />
      <RootStack.Screen name="MainStackNavigator" component={MainNavigator} />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
