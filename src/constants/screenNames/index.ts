import {MainStackNameType, OnboardingStackNameType} from '../navigatorTypes';

interface IScreenNames {
  PROFILE_SCREEN: MainStackNameType;
  SETTINGS_SCREEN: MainStackNameType;
  POKELIST_SCREEN: MainStackNameType;
  LOADING_SCREEN: OnboardingStackNameType;
  LOGIN_SCREEN: OnboardingStackNameType;
}

export const screenNames: IScreenNames = {
  PROFILE_SCREEN: 'ProfileScreen',
  SETTINGS_SCREEN: 'SettingsScreen',
  POKELIST_SCREEN: 'PokeListScreen',
  LOADING_SCREEN: 'LoadingScreen',
  LOGIN_SCREEN: 'LoginScreen',
};
