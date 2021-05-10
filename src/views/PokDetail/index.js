import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PokContext from '../../context/pokemons';

export default function PokDetail () {
  const { id } = useParams();
  const { getPoksDetail } = useContext(PokContext);
  useEffect(() => {
    getPoksDetail(id).catch(null);
  }, [getPoksDetail, id]);
  return (
    <div>
      PokDetail
    </div>
  );
}
