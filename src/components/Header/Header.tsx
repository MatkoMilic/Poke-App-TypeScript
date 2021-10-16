import {CompositeNavigationProp, useRoute} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import React from 'react';
import {View, Text, Button} from 'react-native';
import {MainStackParamList, RootNavigatorParamsList} from '../../constants';
import {
  MainStackNameType,
  RootNavigatorNameType,
} from '../../constants/navigatorTypes';
import {styles} from './styles';

interface HeaderProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<MainStackParamList>,
    NativeStackNavigationProp<RootNavigatorParamsList>
  >;
  leftButtonScreenName: MainStackNameType | RootNavigatorNameType;
  rightButtonScreenName: MainStackNameType | RootNavigatorNameType;
  leftScreenTitle: string;
  rightScreenTitle: string;
}

const Header: React.FC<HeaderProps> = ({
  navigation,
  leftButtonScreenName,
  rightButtonScreenName,
  leftScreenTitle,
  rightScreenTitle,
}) => {
  const route = useRoute();

  return (
    <View style={styles.headerContainer}>
      <Button
        title={leftScreenTitle}
        onPress={() => navigation.navigate(leftButtonScreenName)}></Button>
      <Text>{route.name.replace(/([a-z])([A-Z])/, '$1 $2')}</Text>
      <Button
        title={rightScreenTitle}
        onPress={() => navigation.navigate(rightButtonScreenName)}></Button>
    </View>
  );
};

export default Header;
