import { useState } from 'react';
import PokContext from './index';
import apiCall from '../../api/';

export default function PokProvider ({ children }) {
  const [poks, setPoks] = useState([]);
  const [pokDetail, setPokDetail] = useState({});
  const getPok = async () => {
    try {
      const pokResults = await apiCall({ url: 'https://pokeapi.co/api/v2/pokemon?limit=100' });
      setPoks(pokResults.results);
    } catch (error) {
      setPoks([]);
    }
  };

  const getPoksDetails = async (id) => {
    if (!id) {
      Promise.reject(new Error('Id required'));
    }
    try {
      const resPokDetail = await apiCall({ url: `https://pokeapi.co/api/v2/item/${id}` });
      setPokDetail(resPokDetail);
    } catch {
      setPokDetail({});
    }
  };

  return (
    <PokContext.Provider value={{ getPok, poks, getPoksDetails, pokDetail }}>
      {children}
    </PokContext.Provider>
  );
}
