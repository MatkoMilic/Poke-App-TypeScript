import React, {useState} from 'react';
import {Text, Alert, Button} from 'react-native';
import {SafeAreaView} from 'react-native-safe-area-context';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {CompositeNavigationProp} from '@react-navigation/native';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {ScreenContainer} from '../../components';
import {InputField} from '../../components/InputField';
import {
  navigatorNames,
  OnboardingStackParamList,
  RootNavigatorParamsList,
  screenNames,
  UserValues,
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

  const signUpUser = () => {
    try {
      const userDetails: UserValues = {
        email: email,
        password: password,
        favoritePokemon: 'null',
        theme: 'light',
      };
      AsyncStorage.setItem(email, JSON.stringify(userDetails)).catch(error => {
        console.log(error);
      });
      AsyncStorage.setItem('activeUser', email);
      navigation.replace(navigatorNames.MAIN_NAVIGATOR, {
        screen: screenNames.PROFILE_SCREEN,
      });
    } catch (err) {
      console.log(err);
    }
  };

  const validateInput = () => {
    if (email.length == 0 || password.length == 0) {
      Alert.alert('Warning', 'Credentials cannot be empty.');
      return false;
    } else if (password.length < 8 || email.length < 8) {
      Alert.alert(
        'Warning',
        'Credentials cannot be shorter than 8 characters.',
      );
      return false;
    } else {
      return true;
    }
  };

  const logUserIn = async () => {
    const doesUserExistAlready = await AsyncStorage.getItem(email);
    const userParsed: UserValues = JSON.parse(doesUserExistAlready || '{}');
    if (userParsed.password != password) {
      Alert.alert('Warning', 'Entered password is not correct!');
    } else {
      AsyncStorage.setItem('activeUser', email);
      navigation.replace(navigatorNames.MAIN_NAVIGATOR, {
        screen: screenNames.PROFILE_SCREEN,
      });
    }
  };

  const onSubmit = async () => {
    const doesUserExistAlready = await AsyncStorage.getItem(email);
    const validatedUserInput = validateInput();
    if (validatedUserInput && !doesUserExistAlready) {
      signUpUser();
      return;
    } else if (validatedUserInput && doesUserExistAlready) {
      logUserIn();
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
