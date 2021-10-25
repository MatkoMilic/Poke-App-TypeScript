import React from 'react';
import {ActivityIndicator, Text, View} from 'react-native';
import {IPokemonAttributes} from '../../types';
import {styles} from './styles';

interface PokemonAttributesItemProps {
  data: IPokemonAttributes;
}

const PokemonAttributesItem: React.FC<PokemonAttributesItemProps> = ({
  data,
}) => {
  return (
    <View>
      <Text style={styles.pokemonAttribute}>Some of his traits are:</Text>
      <Text style={styles.pokemonAttribute}>Height: {data.height},</Text>
      <Text style={styles.pokemonAttribute}>Weight: {data.weight},</Text>
      <Text style={styles.pokemonAttribute}>Id in database: {data.id},</Text>
      <Text style={styles.pokemonAttribute}>
        Base experience: {data.base_experience}.
      </Text>
    </View>
  );
};

export default PokemonAttributesItem;
