import './App.css';
import Routes from './routes';
import PokProvider from './context/pokemons/Provider';

function App () {
  return (
    <div>
      <div>
        <img className='portada' src='https://wallpaperaccess.com/full/20997.jpg' alt='Background' />
        <h1 className='title'> PokApp </h1>
      </div>
      <div className='provider'>
        <PokProvider>
          <Routes />
        </PokProvider>
      </div>
    </div>
  );
}

export default App;
