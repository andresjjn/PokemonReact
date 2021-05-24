import HomeButton from '../../components/hooks/HomeButton';

export default function NotFound () {
  return (
    <div>
      <HomeButton />
      <div className='not-found'>
        <img
          src='https://g.redditmedia.com/0Baq2Si5-_OKZLrzmqZCwIKJKd1aGgRd6g7b2D_fVfU.gif?fm=mp4&mp4-fragmented=false&s=2db8d45445ec112ed9916323f1708876'
          alt='404'
          style={{
            width: '400px',
            borderRadius: '50%'
          }}
        />
        <img
          src='https://fontmeme.com/permalink/210519/681b4f388e1ce3bbec107a9afb8a725a.png'
          alt='Snorlax'
          border='0'
          style={{
            width: '40%'
          }}
        />
      </div>
    </div>
  );
}
