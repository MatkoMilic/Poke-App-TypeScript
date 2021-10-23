import React, {useEffect, useState} from 'react';
import {View, Text, ActivityIndicator} from 'react-native';
import {IUserValues} from '../../types';
import {getActiveUser, getActiveUserValueDetails} from '../../constants';
import {usePokemonAttributes} from '../../utils';
import {PokemonAttributesItem} from '../PokemonAttributesItem';

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
  //PokemonAttributesItem doesnt use data
  //right away but only after refreshing
  return (
    <View>
      <Text>Hello {currentUser} </Text>
      <Text>Your favorite pokemon is {currentUserData?.favoritePokemon} </Text>

      {data ? <PokemonAttributesItem data={data} /> : null}
    </View>
  );
};

export default MyProfileCard;
