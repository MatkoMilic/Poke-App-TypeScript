import React, {FC} from 'react';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {ProfileScreen, SettingsScreen, PokeListScreen} from '../../screens';
import {screenNames} from '../../constants';

const MainStack = createNativeStackNavigator();

const MainNavigator: FC = () => {
  return (
    <MainStack.Navigator initialRouteName={screenNames.PROFILE_SCREEN}>
      <MainStack.Screen
        name={screenNames.PROFILE_SCREEN}
        component={ProfileScreen}
      />
      <MainStack.Screen
        name={screenNames.SETTINGS_SCREEN}
        component={SettingsScreen}
      />
      <MainStack.Screen
        name={screenNames.POKELIST_SCREEN}
        component={PokeListScreen}
      />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
