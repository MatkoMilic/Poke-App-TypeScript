import {
  LOADING_SCREEN,
  POKELIST_SCREEN,
  LOGIN_SCREEN,
  PROFILE_SCREEN,
  SETTINGS_SCREEN,
} from './screenNames';
import {navigatorNames} from './navigatorNames';
import {urls} from './urls';
import {Theme} from './themes';
import {
  getActiveUser,
  getActiveUserValueDetails,
  removeActiveUser,
} from './asyncStorageFunctions';
import {
  OnboardingStackParamList,
  MainStackParamList,
  RootNavigatorParamsList,
  RootNavigatorNameType,
} from './navigatorTypes';
import {UserValues} from '../types/userValues';

export {
  LOADING_SCREEN,
  POKELIST_SCREEN,
  LOGIN_SCREEN,
  SETTINGS_SCREEN,
  PROFILE_SCREEN,
  urls,
  navigatorNames,
  Theme,
  getActiveUser,
  getActiveUserValueDetails,
  removeActiveUser,
};

export type {
  OnboardingStackParamList,
  MainStackParamList,
  RootNavigatorParamsList,
  UserValues,
  RootNavigatorNameType,
};
