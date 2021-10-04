import React, {FC} from 'react';
import {ProfileScreen} from '../../screens';
import {SettingsScreen} from '../../screens';
import {PokeListScreen} from '../../screens';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

const MainStack = createNativeStackNavigator();

const MainNavigator: FC = () => {
  return (
    <MainStack.Navigator>
      <MainStack.Screen name="ProfileScreen" component={ProfileScreen} />
      <MainStack.Screen name="SettingsScreen" component={SettingsScreen} />
      <MainStack.Screen name="PokeListScreen" component={PokeListScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
