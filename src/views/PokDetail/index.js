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
  const imageId = (id) => {
    if (id >= 100) {
      return `${id}`;
    }
    id <= 9 ? id = `00${id}` : id = `0${id}`;
    return id;
  };
  return (
    <div className='pokinfo'>
      {hasError
        ? <ErrorMessage message={errorMessage} />
        : (
          <>
            <HomeButton />
            <div className='info'>
              <h1
                style={{
                  paddingTop: '5%'
                }}
              > {`${pokDetail?.name}`}
              </h1>
              <img src={`https://images.gameinfo.io/pokemon/256/${imageId(id)}-00.webp`} alt='Pokemón' />
              <p>{`Weight: ${pokDetail?.weight} kg`}</p>
              <p>{`Hight: ${pokDetail?.height} m`}</p>
              <br />
              <h2> Habilities </h2>
              {pokDetail.stats?.map((base, index) => (
                <div key={index}>
                  <p> {`${base.stat.name} : ${base.base_stat}`} </p>
                </div>
              ))}
              <PokStats pokDetail={pokDetail ? { ...pokDetail } : []} />
            </div>
          </>
          )}
    </div>
  );
}
