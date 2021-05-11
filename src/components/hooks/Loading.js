export default function Loading ({ title }) {
  return (
    <div>
      <img
        src='https://flevix.com/wp-content/uploads/2019/07/Curve-Loading.gif'
        alt='Loading'
        width='500'
        style={{
          display: 'flex',
          alignContent: 'center'
        }}
      />
      <p>{title}</p>
    </div>
  );
}
