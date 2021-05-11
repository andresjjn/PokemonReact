import './App.css';
import Routes from './routes';
import PokProvider from './context/pokemons/Provider';

function App () {
  return (
    <PokProvider classname='provider'>
      <Routes />
    </PokProvider>
  );
}

export default App;
