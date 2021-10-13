import React, {useState} from 'react';
import {Text, Alert, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CompositeNavigationProp} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScreenContainer} from '../../components';
import {InputField} from '../../components/InputField';
import {
  OnboardingStackParamList,
  RootNavigatorParamsList,
} from '../../constants';
interface LoginProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<OnboardingStackParamList, 'LoginScreen'>,
    NativeStackNavigationProp<RootNavigatorParamsList>
  >;
}

const Login: React.FC<LoginProps> = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const signUpUser = async () => {
    try {
      const userDetails = {
        email: email,
        password: password,
        favoritePokemon: 'null',
        theme: 'light',
      };
      AsyncStorage.setItem(email, JSON.stringify(userDetails)).catch(() => {});
      AsyncStorage.setItem('activeUser', email);
      navigation.replace('MainNavigator', {screen: 'ProfileScreen'});
    } catch (err) {}
  };

  const validateInput = () => {
    const userInputEmpty = true
      ? email.length == 0 || password.length == 0
      : false;
    const userInputTooShort = true
      ? password.length < 8 || email.length < 8
      : false;
    if (userInputEmpty) {
      Alert.alert('Warning', 'Credentials cannot be empty.');
    } else if (userInputTooShort) {
      Alert.alert(
        'Warning',
        'Credentials cannot be shorter than 8 characters.',
      );
    } else {
      return true;
    }
  };

  const onSubmit = async () => {
    const doesUserExistAlready = await AsyncStorage.getItem(email);
    if (validateInput()) {
      if (doesUserExistAlready != null) {
        const fetchUser = await AsyncStorage.getItem(email);
        const userParsed = fetchUser !== null ? JSON.parse(fetchUser) : null;
        if (userParsed.password != password) {
          Alert.alert('Warning', 'Entered password is not correct!');
        } else {
          AsyncStorage.setItem('activeUser', email);
          navigation.replace('MainNavigator', {screen: 'ProfileScreen'});
        }
      } else if (doesUserExistAlready == null) {
        signUpUser();
      }
    }
  };

  return (
    <ScreenContainer>
      <SafeAreaView>
        <InputField
          value={email}
          onChangeText={text => setEmail(text)}
          placeholder="Email address"
        />
        <InputField
          value={password}
          onChangeText={text => setPassword(text)}
          secureTextEntry
          placeholder="Password"
        />
        <Text>Login Screen</Text>
        <Button title="Submit" onPress={onSubmit}></Button>
      </SafeAreaView>
    </ScreenContainer>
  );
};

export default Login;
