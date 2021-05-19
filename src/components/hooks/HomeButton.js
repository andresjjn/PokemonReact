import { Link } from 'react-router-dom';

export default function HomeButton () {
  return (
    <div className='header'>
      <button className='home-button'>
        <Link to='/'>
          <img
            className='home-image'
            src='https://fontmeme.com/permalink/210512/7341a274c4b54aedea614c4d156ab7ec.png'
            alt='Pokemón'
          />
        </Link>
      </button>
      <img
        className='descripcion'
        src='https://fontmeme.com/permalink/210519/3754d69bbcbf8a1a88f856e2dcdbf777.png'
        alt='Catch'
        border='0'
      />
    </div>
  );
}
