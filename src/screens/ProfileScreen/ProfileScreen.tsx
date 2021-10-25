import React from 'react';
import {View, Text} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  MainStackParamList,
  RootNavigatorParamsList,
  SETTINGS_SCREEN,
  POKELIST_SCREEN,
} from '../../constants';
import {ScreenContainer, Header} from '../../components';
import MyProfileCard from '../../components/MyProfileCard';

interface ProfileProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<MainStackParamList>,
    NativeStackNavigationProp<RootNavigatorParamsList>
  >;
}

const Profile: React.FC<ProfileProps> = ({navigation}) => {
  return (
    <ScreenContainer>
      <Header
        navigation={navigation}
        leftButtonScreenName={SETTINGS_SCREEN}
        rightButtonScreenName={POKELIST_SCREEN}
        leftScreenTitle="Settings"
        rightScreenTitle="Pokemons"
      />
      <MyProfileCard />
    </ScreenContainer>
  );
};

export default Profile;
