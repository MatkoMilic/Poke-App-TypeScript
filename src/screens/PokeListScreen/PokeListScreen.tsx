import React from 'react';
import {ActivityIndicator, FlatList, ListRenderItem} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  MainStackParamList,
  RootNavigatorParamsList,
  screenNames,
} from '../../constants';
import {usePokemons} from '../../utils/usePokemons';
import {
  PokemonListItem,
  ScreenContainer,
  IPokemon,
  Header,
} from '../../components';

interface PokeListProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<MainStackParamList>,
    NativeStackNavigationProp<RootNavigatorParamsList>
  >;
}

const PokeListScreen: React.FC<PokeListProps> = ({navigation}) => {
  const renderItem: ListRenderItem<IPokemon> = ({item}) => (
    <PokemonListItem data={item} key={item.name} />
  );
  const {data, isLoading} = usePokemons();

  return (
    <ScreenContainer>
      <Header
        navigation={navigation}
        leftButtonScreenName={screenNames.PROFILE_SCREEN}
        rightButtonScreenName={screenNames.SETTINGS_SCREEN}
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
