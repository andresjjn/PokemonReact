// import PokContext from '../../context/pokemons';
import PokList from './components/PokList';
import Loading from '../../components/hooks/Loading';
import ErrorMessage from '../../components/hooks/ErrorMessage';
import usePoksStore from '../../zustand/stores/pokemon';
import shallow from 'zustand/shallow';
import HomeButton from '../../components/hooks/HomeButton';
import SearchBox from '../../components/hooks/SearchBox';

export default function Home () {
  const { poks, isLoading, hasError, errorMessage, handleSearchClick, handleCloseClick } = usePoksStore(state => ({
    getPok: state.getPok,
    poks: state.poks,
    isLoading: state.isLoading,
    hasError: state.hasError,
    errorMessage: state.errorMessage,
    handleSearchClick: state.handleSearchClick,
    handleCloseClick: state.handleCloseClick
  }), shallow);
  // const { getPok, poks, isLoading, hasError, errorMessage } = useContext(PokContext);

  if (isLoading) {
    return <Loading />;
  }
  return (
    <>
      <HomeButton />
      <SearchBox onSearch={handleSearchClick} onClose={handleCloseClick} />
      <div className='list'>
        {hasError ? <ErrorMessage message={errorMessage} /> : <PokList poks={poks} />}
      </div>
    </>
  );
}
