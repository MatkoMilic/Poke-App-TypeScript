import React, {FC, useState} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {OnboardingNavigator} from '../OnboardingNavigator';
import {MainNavigator} from '../MainNavigator';
import {navigatorNames} from '../../constants';

const RootStack = createNativeStackNavigator();

const RootNavigator: FC = () => {
  const [user, setUser] = useState<any>(null);
  const isUserLoggedIn = () => {};

  return (
    <RootStack.Navigator initialRouteName="OnboardingNavigator">
      <RootStack.Screen
        name={navigatorNames.ONBOARDING_NAVIGATOR}
        component={OnboardingNavigator}
      />
      <RootStack.Screen
        name={navigatorNames.MAIN_NAVIGATOR}
        component={MainNavigator}
      />
    </RootStack.Navigator>
  );
};

export default RootNavigator;
