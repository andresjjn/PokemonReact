import './App.scss';
import Routes from './routes';
import PokProvider from './context/pokemons/Provider';

function App () {
  return (
    <div>
      <div className='provider'>
        <PokProvider>
          <Routes />
        </PokProvider>
      </div>
    </div>
  );
}

export default App;
