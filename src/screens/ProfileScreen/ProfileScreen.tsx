import React from 'react';
import {View, Text, Button} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  MainStackParamList,
  RootNavigatorParamsList,
  screenNames,
} from '../../constants';
import {ScreenContainer, Header} from '../../components';

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
        leftButtonScreenName={screenNames.SETTINGS_SCREEN}
        rightButtonScreenName={screenNames.POKELIST_SCREEN}
        leftScreenTitle="Settings"
        rightScreenTitle="Pokemons"
      />
      <View>
        <Text>Profile Screen</Text>
        <Button
          title="Go to Settings"
          onPress={() =>
            navigation.navigate(screenNames.SETTINGS_SCREEN)
          }></Button>
      </View>
    </ScreenContainer>
  );
};

export default Profile;
