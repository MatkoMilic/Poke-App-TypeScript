import React, {FC} from 'react';
import {ProfileScreen} from '../../screens';
import {SettingsScreen} from '../../screens';
import {PokeListScreen} from '../../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const Stack = createNativeStackNavigator();

const MainNavigator: FC = () => {
  return (
    <Stack.Navigator>
      <Stack.Screen name="ProfileScreen" component={ProfileScreen} />
      <Stack.Screen name="SettingsScreen" component={SettingsScreen} />
      <Stack.Screen name="PokeListScreen" component={PokeListScreen} />
    </Stack.Navigator>
  );
};

export default MainNavigator;
