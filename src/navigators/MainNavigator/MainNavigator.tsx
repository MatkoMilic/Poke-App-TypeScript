import React, {FC} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {ProfileScreen, SettingsScreen, PokeListScreen} from '../../screens';
import {
  MainStackParamList,
  POKELIST_SCREEN,
  PROFILE_SCREEN,
  SETTINGS_SCREEN,
} from '../../constants';

interface MainNavigatorProps {
  navigation: NativeStackNavigationProp<MainStackParamList>;
}

const MainStack = createNativeStackNavigator();

const MainNavigator: FC<MainNavigatorProps> = ({navigation}) => {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={PROFILE_SCREEN}>
      <MainStack.Screen
        name={PROFILE_SCREEN}
        options={{headerShown: false}}
        component={ProfileScreen}
      />
      <MainStack.Screen
        name={SETTINGS_SCREEN}
        options={{headerShown: false}}
        component={SettingsScreen}
      />
      <MainStack.Screen name={POKELIST_SCREEN} component={PokeListScreen} />
    </MainStack.Navigator>
  );
};

export default MainNavigator;
