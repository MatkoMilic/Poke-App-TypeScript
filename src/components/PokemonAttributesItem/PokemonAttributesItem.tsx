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
      <Text>Some of his traits are:</Text>
      <Text>Height: {data.height},</Text>
      <Text>Weight: {data.weight},</Text>
      <Text>Id in database: {data.id},</Text>
      <Text>Base experience: {data.base_experience}.</Text>
    </View>
  );
};

export default PokemonAttributesItem;
