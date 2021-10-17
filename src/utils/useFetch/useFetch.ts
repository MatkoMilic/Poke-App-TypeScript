import {useEffect, useState} from 'react';

const useFetch = (url: string) => {
  const [isLoading, setLoading] = useState(true);
  const [data, setData] = useState([]);
  const [error, setError] = useState(null);

  const pokeApiFetch = async () => {
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
    pokeApiFetch();
  }, [url]);
  return {data, error, isLoading};
};

export default useFetch;
