import React, { FC } from 'react';
import Container from '../../components/Container';
import PowerRadar, { Powers } from '../../components/PowerRadar';
import PowersList from '../../components/PowersList';
import useArena from '../../hooks/useArena';
import Loader from '../../components/Loader';
import NoResult from '../../components/NoResult';
import styles from '../../styles/Arena.module.css';
import Head from 'next/head';

const Arena: FC = () => {
  const { isFetching, arenaPlayers } = useArena();

  const arenaContent = () => {
    if (arenaPlayers) {
      const [player, opponent] = arenaPlayers;
      const playerColor = '#395abd';
      const opponentColor = '#be1417';

      return (
        <>
          <Head>
            <title>{`Arena-${player.name} v ${opponent.name}`}</title>
          </Head>
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
