import { useContext, useEffect } from 'react';
import PokContext from '../../context/pokemons';
import PokList from './components/PokList';

export default function Home () {
  const { getPok, poks } = useContext(PokContext);
  useEffect(() => {
    getPok().catch(null);
  }, [getPok]);
  return (
    <div>
      <PokList poks={poks} />
    </div>
  );
}
