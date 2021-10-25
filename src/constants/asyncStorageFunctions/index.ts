import AsyncStorage from '@react-native-async-storage/async-storage';
import {IUserValues} from '../../types';

export const getActiveUser = async () => {
  const activeUser = await AsyncStorage.getItem('activeUser');
  return activeUser;
};

export const removeActiveUser = async () => {
  await AsyncStorage.removeItem('activeUser');
};

export const getActiveUserValueDetails = async () => {
  const activeUserEmail = await getActiveUser();
  if (activeUserEmail) {
    const getUserValueDetails = await AsyncStorage.getItem(activeUserEmail);
    if (getUserValueDetails) {
      const getUserDetailsParsed: IUserValues = JSON.parse(getUserValueDetails);
      return getUserDetailsParsed;
    }
  }
};
