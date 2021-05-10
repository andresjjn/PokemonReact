import { useEffect, useContext } from 'react';
import { useParams } from 'react-router-dom';
import PokContext from '../../context/pokemons';

export default function PokDetail () {
  const { id } = useParams();
  const { getPoksDetails, pokDetail, isLoading } = useContext(PokContext);
  useEffect(() => {
    getPoksDetails(id).catch(null);
  }, []);
  console.log(pokDetail);
  if (isLoading === true) {
    return (<p>Loading pokemon information</p>);
  }
  return (
    <div>
      <p>{`Name: ${pokDetail?.name}`}</p>
      <p>{`Weight: ${pokDetail?.weight} kg`}</p>
      <p>{`Hight: ${pokDetail?.height} cm`}</p>
    </div>
  );
}
