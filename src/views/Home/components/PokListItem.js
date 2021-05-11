import { Link } from 'react-router-dom';

export default function PokListitem ({ name, url }) {
  const getId = () => url.split('/')[6];

  return (
    <>
      <button className='poklist'>
        <Link to={`/pokemon/${getId()}`} className='poktext'> {name} </Link>
      </button>
    </>
  );
}
