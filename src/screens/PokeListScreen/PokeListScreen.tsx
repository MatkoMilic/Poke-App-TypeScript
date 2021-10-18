import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  View,
  ListRenderItem,
  Button,
} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import {
  MainStackParamList,
  RootNavigatorParamsList,
  screenNames,
  urls,
} from '../../constants';
import {usePokemons} from '../../utils/pokemons';
import styles from './styles';
import {Pokemon, ScreenContainer} from '../../components';

interface PokeListProps {
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<MainStackParamList, 'PokeListScreen'>,
    NativeStackNavigationProp<RootNavigatorParamsList>
  >;
}
interface PokeListItemProps {
  name: string;
  id: string;
}

const PokeListScreen: React.FC<PokeListProps> = ({navigation}) => {
  const renderItem: ListRenderItem<PokeListItemProps> = ({item}) => (
    <Pokemon data={item} key={item.name} />
  );
  const {data, isLoading} = usePokemons(urls.pokemonDataUrl);

  return (
    <ScreenContainer>
      <Button
        title="Go to profile"
        onPress={() => navigation.navigate(screenNames.PROFILE_SCREEN)}
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
