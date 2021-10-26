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
  const {data, isLoading, fetchPokemonAttributes} = usePokemonAttributes();
  const [hasLoaded, setHasLoaded] = useState<boolean>();

  const setUserDetails = async () => {
    const loggedUser = await getActiveUser();
    const loggedUserValues = await getActiveUserValueDetails();
    if (loggedUser) {
      setCurrentUser(loggedUser);
    }
    if (loggedUserValues) {
      setCurrentUserData(loggedUserValues);
      setHasLoaded(true);
      fetchPokemonAttributes(loggedUserValues.favoritePokemon);
    }
  };

  useEffect(() => {
    setUserDetails();
  }, []);

  return (
    <View>
      <Text style={styles.welcomeText}>
        Hello {currentUser}, your favorite pokemon currently is{' '}
        {currentUserData?.favoritePokemon}.
      </Text>

      {isLoading ? (
        <ActivityIndicator />
      ) : hasLoaded && data ? (
        <PokemonAttributesItem data={data} />
      ) : null}
    </View>
  );
};

export default MyProfileCard;
