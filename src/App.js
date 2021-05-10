import './App.css';
import Routes from './routes';
import PokProvider from './context/pokemons/Provider';

function App () {
  return (
    <PokProvider>
      <Routes />
    </PokProvider>
  );
}

export default App;
