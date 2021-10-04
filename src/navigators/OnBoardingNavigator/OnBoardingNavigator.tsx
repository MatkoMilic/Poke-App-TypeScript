import React, {FC} from 'react';
import {LoadingScreen} from '../../screens';
import {LoginScreen} from '../../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const OnBoarding: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="LoadingScreen" component={LoadingScreen} />
      <Stack.Screen name="LoginScreen" component={LoginScreen} />
    </Stack.Navigator>
  );
};

export default OnBoarding;
