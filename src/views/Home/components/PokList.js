import PokListitem from './PokListItem';

export default function PokList ({ poks }) {
  return (
    <>
      {poks?.map((pok, index) => <PokListitem key={index} {...pok} />)};
    </>
  );
}
