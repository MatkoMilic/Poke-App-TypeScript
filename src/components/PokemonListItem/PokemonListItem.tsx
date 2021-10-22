import React from 'react';
import {Text, View} from 'react-native';
import {IPokemon} from '../../types';
import {styles} from './styles';

interface PokemonItemProps {
  data: IPokemon;
}

const PokemonListItem: React.FC<PokemonItemProps> = ({data}) => {
  return (
    <View>
      <Text style={styles.pokemonListItem}>{data.name}</Text>
    </View>
  );
};

export default PokemonListItem;
