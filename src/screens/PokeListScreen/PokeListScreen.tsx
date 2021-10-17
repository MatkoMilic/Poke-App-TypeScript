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

interface PokeListProps {
  name: string;
  id: string;
  navigation: CompositeNavigationProp<
    NativeStackNavigationProp<MainStackParamList, 'PokeListScreen'>,
    NativeStackNavigationProp<RootNavigatorParamsList>
  >;
}

const Item = ({data}: {data: PokeListProps}) => {
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

const PokeList: React.FC<PokeListProps> = ({navigation}) => {
  const renderItem: ListRenderItem<PokeListProps> = ({item}) => (
    <Item data={item} key={item.name} />
  );

  const {data, isLoading} = useFetch(
    'https://pokeapi.co/api/v2/pokemon/?limit=20',
  );

  return (
    <View style={{flex: 1, padding: 24}}>
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
