import {useEffect, useState} from 'react';
import {urls} from '../../constants';
import {IPokemon} from '../../types';

interface IusePokemons {
  data: IPokemon[] | undefined;
  error: string;
  isLoading: boolean;
}

const usePokemons = (): IusePokemons => {
  const [isLoading, setLoading] = useState(false);
  const [data, setData] = useState<IPokemon[]>();
  const [error, setError] = useState('');
  const abortController = new AbortController();

  const fetchingPokemons = async () => {
    setLoading(true);
    try {
      const response = await fetch(urls.pokemonDataUrl, {
        signal: abortController.signal,
      });
      const json = await response.json();
      setData(await json.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchingPokemons();
    return () => {
      abortController.abort();
    };
  }, []);
  return {data, error, isLoading};
};

export default usePokemons;
