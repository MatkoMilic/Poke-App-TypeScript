import React, {FC} from 'react';
import {LoadingScreen} from '../../screens';
import {LoginScreen} from '../../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const OnboardingStack = createNativeStackNavigator();

const OnboardingNavigator: FC = () => {
  return (
    <OnboardingStack.Navigator>
      <OnboardingStack.Screen name="LoadingScreen" component={LoadingScreen} />
      <OnboardingStack.Screen name="LoginScreen" component={LoginScreen} />
    </OnboardingStack.Navigator>
  );
};

export default OnboardingNavigator;
