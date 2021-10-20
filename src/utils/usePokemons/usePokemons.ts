import {useCallback, useEffect, useRef, useState} from 'react';
import {urls} from '../../constants';
import {IPokemon} from '../../types';

interface IusePokemons {
  data: IPokemon[] | undefined;
  error: null;
  isLoading: boolean;
}

const usePokemons = (): IusePokemons => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState<IPokemon[]>();
  const [error, setError] = useState(null);
  const mountedRef = useRef(true);

  const fetchingPokemons = useCallback(async () => {
    try {
      const response = await fetch(urls.pokemonDataUrl);
      const json = await response.json();
      if (!mountedRef.current) return null;
      setData(json.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  }, [mountedRef]);

  useEffect(() => {
    fetchingPokemons();
  }, [fetchingPokemons]);
  return {data, error, isLoading};
};

export default usePokemons;
