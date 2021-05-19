import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
// import PokContext from '../../context/pokemons';
import PokStats from './components/PokStats';
import Loading from '../../components/hooks/Loading';
import ErrorMessage from '../../components/hooks/ErrorMessage';
import usePoksStore from '../../zustand/stores/pokemon';
import HomeButton from '../../components/hooks/HomeButton';

export default function PokDetail () {
  const { id } = useParams();
  // const { getPoksDetails, pokDetail, isLoading, hasError, errorMessage } = useContext(PokContext);
  const { getPoksDetails, pokDetail, isLoading, hasError, errorMessage } = usePoksStore(state => ({
    getPoksDetails: state.getPoksDetails,
    pokDetail: state.pokDetail,
    isLoading: state.isLoading,
    hasError: state.hasError,
    errorMessage: state.errorMessage
  }));
  useEffect(() => {
    getPoksDetails(id).catch(null);
  }, [getPoksDetails, id]);
  if (isLoading === true) {
    return <Loading />;
  }
  return (
    <div className='pokinfo'>
      {hasError
        ? <ErrorMessage message={errorMessage} />
        : (
          <>
            <HomeButton />
            <h3 style={{ marginTop: 15, marginBottom: 15 }}> General info </h3>
            <p>{`Name: ${pokDetail?.name}`}</p>
            <p>{`Weight: ${pokDetail?.weight} kg`}</p>
            <p>{`Hight: ${pokDetail?.height} cm`}</p>
            <div>
              <h3 style={{ marginTop: 30, marginBottom: 15 }}> Habilities </h3>
              <PokStats stats={pokDetail?.stats ?? []} />
            </div>
          </>
          )}
    </div>
  );
}
