import React from 'react';
import {Text, View} from 'react-native';

export interface IPokemon {
  name: string;
  id: string;
}

interface PokemonItemProps {
  data: IPokemon;
}

const PokemonListItem: React.FC<PokemonItemProps> = ({data}) => {
  return (
    <View>
      <Text>{data.name}</Text>
    </View>
  );
};

export default PokemonListItem;
