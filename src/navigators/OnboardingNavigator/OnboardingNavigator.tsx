import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {LoadingScreen, LoginScreen} from '../../screens';
import {screenNames} from '../../constants';

const OnboardingStack = createNativeStackNavigator();

const OnboardingNavigator: FC = () => {
  return (
    <OnboardingStack.Navigator>
      <OnboardingStack.Screen
        name={screenNames.LOADING_SCREEN}
        component={LoadingScreen}
      />
      <OnboardingStack.Screen
        name={screenNames.LOGIN_SCREEN}
        component={LoginScreen}
      />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;
