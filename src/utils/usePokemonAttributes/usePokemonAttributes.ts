import {useState} from 'react';
import {urls} from '../../constants';
import {IPokemonAttributes} from '../../types';

interface IusePokemonAttributes {
  data?: IPokemonAttributes;
  error: string;
  isLoading: boolean;
  fetchPokemonAttributes: (pokemonUrl: string) => Promise<void>;
}

const usePokemonAttributes = (): IusePokemonAttributes => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<IPokemonAttributes>();
  const [error, setError] = useState('');
  const abortController = new AbortController();

  const fetchPokemonAttributes = async (pokemonUrl: string) => {
    setLoading(true);
    try {
      const response = await fetch(`${urls.baseUrl + pokemonUrl}`, {
        signal: abortController.signal,
      });
      const json = await response.json();
      setData(await json);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };
  return {data, error, isLoading, fetchPokemonAttributes};
};

export default usePokemonAttributes;
