import React, {FC} from 'react';
import {
  createNativeStackNavigator,
  NativeStackNavigationProp,
} from '@react-navigation/native-stack';
import {ProfileScreen, SettingsScreen, PokeListScreen} from '../../screens';
import {MainStackParamList, screenNames} from '../../constants';
import {Button} from 'react-native';

interface MainNavigatorProps {
  navigation: NativeStackNavigationProp<MainStackParamList>;
}

const MainStack = createNativeStackNavigator();

const MainNavigator: FC<MainNavigatorProps> = ({navigation}) => {
  return (
    <MainStack.Navigator initialRouteName={screenNames.PROFILE_SCREEN}>
      <MainStack.Screen
        name={screenNames.PROFILE_SCREEN}
        options={{
          title: 'Your profile',
          headerStyle: {
            backgroundColor: '#f4511e',
          },
          headerTitleAlign: 'center',
          headerTintColor: 'white',
          headerTitleStyle: {
            fontWeight: 'bold',
          },
          headerRight: () => (
            <Button
              onPress={() => navigation.navigate(screenNames.POKELIST_SCREEN)}
              title="List"
              color="blue"
            />
          ),
          headerLeft: () => (
            <Button
              onPress={() => navigation.navigate(screenNames.SETTINGS_SCREEN)}
              title="Settings"
              color="blue"
            />
          ),
        }}
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
