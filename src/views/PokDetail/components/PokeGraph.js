import { ResponsiveRadar } from '@nivo/radar';

export default function PokeGraph ({ data, pokemon }) {
  const pokeRadar = (data) => {
    if (data.length !== 0) {
      return (
        <div className='pokegraph'>
          <ResponsiveRadar
            data={data}
            keys={[`${pokemon}`]}
            indexBy='hability'
            maxValue={150}
            margin={{ top: 70, right: 80, bottom: 40, left: 80 }}
            curve="cardinalClosed"
            borderWidth={3}
            borderColor={{ from: 'color', modifiers: [] }}
            gridLevels={5}
            gridShape="linear"
            gridLabelOffset={10}
            enableDots={true}
            dotSize={9}
            dotColor="#fff93d"
            dotBorderWidth={10}
            dotBorderColor="#ffffff"
            enableDotLabel={true}
            dotLabel="value"
            dotLabelYOffset={4}
            colors='#ebdf2d'
            fillOpacity={0.3}
            blendMode="normal"
            animate={true}
            motionConfig="default"
            isInteractive={true}
          />
        </div>
      );
    } else {
      return (null);
    }
  };
  return pokeRadar(data);
}
