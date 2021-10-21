import React from 'react';
import {ActivityIndicator, FlatList, ListRenderItem} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  MainStackParamList,
  RootNavigatorParamsList,
  PROFILE_SCREEN,
  SETTINGS_SCREEN,
} from '../../constants';
import {usePokemons} from '../../utils/usePokemons';
import {PokemonListItem, ScreenContainer, Header} from '../../components';
import {IPokemon} from '../../types';

interface PokeListProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<MainStackParamList>,
    NativeStackNavigationProp<RootNavigatorParamsList>
  >;
}

const PokeListScreen: React.FC<PokeListProps> = ({navigation}) => {
  const renderItem: ListRenderItem<IPokemon> = ({item}) => (
    <PokemonListItem data={item} key={item.url} />
  );
  const {data, isLoading} = usePokemons();

  return (
    <ScreenContainer>
      <Header
        navigation={navigation}
        leftButtonScreenName={PROFILE_SCREEN}
        rightButtonScreenName={SETTINGS_SCREEN}
        leftScreenTitle="Profile"
        rightScreenTitle="Settings"
      />
      {isLoading ? (
        <ActivityIndicator />
      ) : (
        <FlatList
          data={data}
          renderItem={renderItem}
          keyExtractor={item => item.name}
        />
      )}
    </ScreenContainer>
  );
};

export default PokeListScreen;
