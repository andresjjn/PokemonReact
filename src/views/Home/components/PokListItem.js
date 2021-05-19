import { Link } from 'react-router-dom';

export default function PokListitem ({ name, url }) {
  const getId = () => url.split('/')[6];
  const imageId = () => {
    let id = getId();
    if (id >= 100) {
      return `${id}`;
    }
    id <= 9 ? id = `00${id}` : id = `0${id}`;
    return id;
  };

  return (
    <>
      <button className='poklist'>
        <Link to={`/pokemon/${getId()}`} className='poktext'>
          <img className='icon' src={`https://images.gameinfo.io/pokemon/256/${imageId()}-00.webp`} alt='Pokemón' />
          {name}
        </Link>
      </button>
    </>
  );
}
