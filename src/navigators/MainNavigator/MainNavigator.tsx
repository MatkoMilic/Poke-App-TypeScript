import React, {Children, FC} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationOptions,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {ProfileScreen, SettingsScreen, PokeListScreen} from '../../screens';
import {MainStackParamList, screenNames} from '../../constants';
import {Alert, Button, TextInput} from 'react-native';

interface MainNavigatorProps {
  navigation: NativeStackNavigationProp<MainStackParamList>;
}

const MainStack = createNativeStackNavigator();

interface ScreenOptionsProps extends NativeStackNavigationOptions {}

const ScreenOptions: React.FC<ScreenOptionsProps> = ({...otherProps}) => {
  return <TextInput {...otherProps}></TextInput>;
};

const MainNavigator: FC<MainNavigatorProps> = ({navigation}) => {
  return (
    <MainStack.Navigator
      screenOptions={{headerShown: false}}
      initialRouteName={screenNames.PROFILE_SCREEN}>
      <MainStack.Screen
        name={screenNames.PROFILE_SCREEN}
        options={{headerShown: false}}
        component={ProfileScreen}
      />
      <MainStack.Screen
        name={screenNames.SETTINGS_SCREEN}
        options={{headerShown: false}}
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
