import React, {FC} from 'react';
import {ProfileScreen} from '../../screens';
import {SettingsScreen} from '../../screens';
import {PokeListScreen} from '../../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MainNavigatorStack = createNativeStackNavigator();

const MainNavigator: FC = () => {
  return (
    <MainNavigatorStack.Navigator>
      <MainNavigatorStack.Screen
        name="ProfileScreen"
        component={ProfileScreen}
      />
      <MainNavigatorStack.Screen
        name="SettingsScreen"
        component={SettingsScreen}
      />
      <MainNavigatorStack.Screen
        name="PokeListScreen"
        component={PokeListScreen}
      />
    </MainNavigatorStack.Navigator>
  );
};

export default MainNavigator;
