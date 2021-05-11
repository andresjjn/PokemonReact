import { useState } from 'react';
import PokContext from './index';
import apiCall from '../../api/';

export default function PokProvider ({ children }) {
  const [poks, setPoks] = useState([]);
  const [pokDetail, setPokDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const [hasError, setHasError] = useState(false);
  const [errorMessage, setErrorMessage] = useState('');

  const getPok = async () => {
    try {
      setIsLoading(true);
      setHasError(false);
      setErrorMessage('');
      const pokResults = await apiCall({ url: 'https://pokeapi.co/api/v2/pokemon?limit=100' });
      setPoks(pokResults.results);
    } catch (error) {
      setPoks({});
      setHasError(true);
      setErrorMessage('Something is wrong with your internet conection or the PokeAPI');
    } finally {
      setIsLoading(false);
    }
  };

  const getPoksDetails = async (id) => {
    if (!id) {
      Promise.reject(new Error('Id required'));
    }
    try {
      setIsLoading(true);
      setHasError(false);
      setErrorMessage('');
      const resPokDetail = await apiCall({ url: `https://pokeapi.co/api/v2/pokemon/${id}` });
      setPokDetail(resPokDetail);
    } catch {
      setPokDetail({});
      setHasError(true);
      setErrorMessage('Something is wrong with your internet conection or the PokeAPI');
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <PokContext.Provider value={{
      getPok,
      poks,
      getPoksDetails,
      pokDetail,
      isLoading,
      hasError,
      errorMessage
    }}
    >
      {children}
    </PokContext.Provider>
  );
}
