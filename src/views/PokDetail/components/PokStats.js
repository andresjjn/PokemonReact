export default function PokStats ({ stats }) {
  return (
    <>
      {stats?.map((base, index) => (
        <div key={index}>
          <p> {base.stat.name} </p>
          <p> {`: ${base.base_stat}`} </p>
        </div>
      ))}
    </>
  );
}
