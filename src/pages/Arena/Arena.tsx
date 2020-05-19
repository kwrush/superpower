import React, { FC, useContext } from 'react';
import { HeroContext } from '~app/containers/HeroProvider';
import Container from '~app/components/Container';
import PowerRadar, { Powers } from '~app/components/PowerRadar';
import NotFound from '../404';

const Arena: FC = () => {
  const { arenaPlayers } = useContext(HeroContext);

  if (!arenaPlayers) return <NotFound />;

  const captions = Object.keys(arenaPlayers[0].powerstats).map(
    (power) => `${power.charAt(0).toUpperCase() + power.slice(1)}`,
  );

  const playerPowers = Object.values(arenaPlayers[0].powerstats);
  const opponentPowers = Object.values(arenaPlayers[1].powerstats);

  return (
    <Container>
      <h3>{`${arenaPlayers[0].name} v ${arenaPlayers[1].name}`}</h3>
      <PowerRadar captions={captions}>
        {(cx, cy, size) => (
          <>
            <Powers powers={opponentPowers} cx={cx} cy={cy} size={size} color="#be1417" />
            <Powers powers={playerPowers} cx={cx} cy={cy} size={size} color="#395abd" />
          </>
        )}
      </PowerRadar>
    </Container>
  );
};

export default Arena;
