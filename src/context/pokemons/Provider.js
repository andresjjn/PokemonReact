import { useState } from 'react';
import PokContext from './index';
import apiCall from '../../api/';

export default function PokProvider ({ children }) {
  const [poks, setPoks] = useState([]);
  const [pokDetail, setPokDetail] = useState({});
  const [isLoading, setIsLoading] = useState(false);
  const getPok = async () => {
    try {
      setIsLoading(true);
      const pokResults = await apiCall({ url: 'https://pokeapi.co/api/v2/pokemon?limit=100' });
      setPoks(pokResults.results);
    } catch (error) {
      setPoks([]);
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
      const resPokDetail = await apiCall({ url: `https://pokeapi.co/api/v2/pokemon/${id}` });
      setPokDetail(resPokDetail);
    } catch {
      setPokDetail({});
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
      isLoading
    }}
    >
      {children}
    </PokContext.Provider>
  );
}
