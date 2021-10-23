import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {IUserValues} from '../../types';
import {getActiveUser, getActiveUserValueDetails} from '../../constants';
import {usePokemonAttributes} from '../../utils';
import {PokemonAttributesItem} from '../PokemonAttributesItem';
import {styles} from './styles';

const MyProfileCard: React.FC = () => {
  const [currentUser, setCurrentUser] = useState('');
  const [currentUserData, setCurrentUserData] = useState<IUserValues>();

  const setUserDetails = async () => {
    const loggedUser = await getActiveUser();
    if (loggedUser) setCurrentUser(loggedUser);
    const loggedUserValues = await getActiveUserValueDetails();
    if (loggedUserValues) {
      setCurrentUserData(loggedUserValues);
    }
  };

  const {data, isLoading} = usePokemonAttributes(
    `${currentUserData?.favoritePokemon}`,
  );

  useEffect(() => {
    setUserDetails();
  }, [data, isLoading]);

  useEffect(() => {}, [currentUserData]);

  return (
    <View>
      <Text style={styles.welcomeText}>
        Hello {currentUser}, your favorite pokemon currently is{' '}
        {currentUserData?.favoritePokemon}.
      </Text>
      {data ? <PokemonAttributesItem data={data} /> : null}
    </View>
  );
};

export default MyProfileCard;
