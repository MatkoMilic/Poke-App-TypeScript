import React from 'react';
import {View, Text, Button} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {MainStackParamList, RootNavigatorParamsList} from '../../constants';
import {ScreenContainer} from '../../components';

interface ProfileProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<MainStackParamList, 'ProfileScreen'>,
    NativeStackNavigationProp<RootNavigatorParamsList>
  >;
}

const Profile: React.FC<ProfileProps> = ({navigation}) => {
  return (
    <ScreenContainer>
      <View>
        <Text>Profile Screen</Text>
        <Button
          title="Go to Settings"
          onPress={() => navigation.navigate('SettingsScreen')}></Button>
      </View>
    </ScreenContainer>
  );
};

export default Profile;
