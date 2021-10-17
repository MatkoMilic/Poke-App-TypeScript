import React from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  View,
  ListRenderItem,
  Button,
} from 'react-native';
import {CompositeNavigationProp} from '@react-navigation/native';
import {
  MainStackParamList,
  RootNavigatorParamsList,
  screenNames,
} from '../../constants';
import {NativeStackNavigationProp} from '@react-navigation/native-stack';
import useFetch from '../../utils/useFetch/useFetch';
import styles from './styles';

interface PokeListProps {
  name: string;
  id: string;
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<MainStackParamList, 'PokeListScreen'>,
    NativeStackNavigationProp<RootNavigatorParamsList>
  >;
}

const Pokemon = ({data}: {data: PokeListProps}) => {
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

const PokeList: React.FC<PokeListProps> = ({navigation}) => {
  const renderItem: ListRenderItem<PokeListProps> = ({item}) => (
    <Pokemon data={item} key={item.name} />
  );

  const {data, isLoading} = useFetch(
    'https://pokeapi.co/api/v2/pokemon/?limit=20',
  );

  return (
    <View style={styles.container}>
      <Button
        title="Go to profile"
        onPress={() => navigation.push(screenNames.PROFILE_SCREEN)}
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
    </View>
  );
};

export default PokeList;
