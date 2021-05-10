import { useContext, useEffect } from 'react';
import PokContext from '../../context/pokemons';
import PokList from './components/PokList';

export default function Home () {
  const { getPok, poks, isLoading } = useContext(PokContext);
  useEffect(() => {
    getPok().catch(null);
  }, []);

  if (isLoading) {
    return (<p> Loading results</p>);
  }
  return <PokList poks={poks} />;
}
