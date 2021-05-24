import PokeGraph from './PokeGraph';

export default function PokStats ({ pokDetail }) {
  const data = [];
  if (Object.entries(pokDetail).length !== 0) {
    for (let i = 0; i < 6; i++) {
      const obj = {};
      obj.hability = pokDetail.stats[i].stat.name;
      obj[pokDetail.name] = pokDetail.stats[i].base_stat;
      data[i] = obj;
    }
  }
  return (
    <>
      <PokeGraph data={data} pokemon={pokDetail.name} />
    </>
  );
}
