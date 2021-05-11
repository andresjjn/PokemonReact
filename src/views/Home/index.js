import { useContext, useEffect } from 'react';
// import PokContext from '../../context/pokemons';
import PokList from './components/PokList';
import Loading from '../../components/hooks/Loading';
import ErrorMessage from '../../components/hooks/ErrorMessage';
import usePoksStore from '../../zustand/stores/pokemon';
import shallow from 'zustand/shallow';

export default function Home () {
  const { getPok, poks, isLoading, hasError, errorMessage } = usePoksStore(state => ({
    getPok: state.getPok,
    poks: state.poks,
    isLoading: state.isLoading,
    hasError: state.hasError,
    errorMessage: state.errorMessage
  }), shallow);
  // const { getPok, poks, isLoading, hasError, errorMessage } = useContext(PokContext);

  useEffect(() => {
    getPok().catch(null);
  }, []);
  // Allow see all keys saved in usePoksStore
  // console.log(usePoksStore.getState());
  if (isLoading) {
    return <Loading title='Loading Pokemon' />;
  }
  return (
    <>
      {hasError ? <ErrorMessage message={errorMessage} /> : <PokList poks={poks} />}
    </>
  );
}
