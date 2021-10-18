import {useEffect, useState} from 'react';

const usePokemons = (url: string) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const fetching = async () => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json.results);
    } catch (error) {
      setError(error.message);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetching();
  }, [fetching]);
  return {data, error, isLoading};
};

export default usePokemons;
