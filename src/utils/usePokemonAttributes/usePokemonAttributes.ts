import {useEffect, useState} from 'react';
import {urls} from '../../constants';
import {IPokemonAttributes} from '../../types';

interface IusePokemonAttributes {
  data: IPokemonAttributes | undefined;
  error: string;
  isLoading: boolean;
}

const usePokemonAttributes = (pokemonUrl: string): IusePokemonAttributes => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<IPokemonAttributes>();
  const [error, setError] = useState('');
  const abortController = new AbortController();

  const fetchingPokemonAttributes = async () => {
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

  useEffect(() => {
    fetchingPokemonAttributes();

    return () => {
      abortController.abort();
    };
  }, []);
  return {data, error, isLoading};
};

export default usePokemonAttributes;
