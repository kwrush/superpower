import React, { FC } from 'react';
import { Helmet } from 'react-helmet';
import Container from '~app/components/Container';
import PowerRadar, { Powers } from '~app/components/PowerRadar';
import PowersList from '~app/components/PowersList';
import useArena from '~app/hooks/useArena';
import Loader from '~app/components/Loader';
import NoResult from '~app/components/NoResult';
import styles from './Arena.module.css';

const Arena: FC = () => {
  const { isFetching, arenaPlayers } = useArena();

  const arenaContent = () => {
    if (arenaPlayers) {
      const [player, opponent] = arenaPlayers;
      const playerColor = '#395abd';
      const opponentColor = '#be1417';

      return (
        <>
          <Helmet>
            <title>{`Arena-${player.name} v ${opponent.name}`}</title>
          </Helmet>
          <h2
            className={styles.header}
          >{`${player.name} v ${opponent.name}`}</h2>
          <section className={styles.arena}>
            <PowersList
              color={playerColor}
              avatar={player.images.sm}
              name={player.name}
              alignment={player.biography.alignment}
              powers={player.powerstats}
            />
            <PowerRadar captions={Object.keys(player.powerstats)}>
              {(cx, cy, size) => (
                <>
                  <Powers
                    powers={Object.values(opponent.powerstats)}
                    cx={cx}
                    cy={cy}
                    size={size}
                    color={opponentColor}
                  />
                  <Powers
                    powers={Object.values(player.powerstats)}
                    cx={cx}
                    cy={cy}
                    size={size}
                    color={playerColor}
                  />
                </>
              )}
            </PowerRadar>
            <PowersList
              color={opponentColor}
              avatar={opponent.images.sm}
              name={opponent.name}
              alignment={opponent.biography.alignment}
              powers={opponent.powerstats}
            />
          </section>
        </>
      );
    }

    return <NoResult />;
  };

  return <Container>{isFetching ? <Loader /> : arenaContent()}</Container>;
};

export default Arena;
