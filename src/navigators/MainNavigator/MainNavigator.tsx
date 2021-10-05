import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen, SettingsScreen, PokeListScreen} from '../../screens';
import screenNames from '../../constants';

const MainStack = createNativeStackNavigator();

const MainNavigator: FC = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen
        name={screenNames.screenNamesMainNavigator.ProfileScreen}
        component={ProfileScreen}
      />
      <MainStack.Screen
        name={screenNames.screenNamesMainNavigator.SettingsScreen}
        component={SettingsScreen}
      />
      <MainStack.Screen
        name={screenNames.screenNamesMainNavigator.PokeListScreen}
        component={PokeListScreen}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
