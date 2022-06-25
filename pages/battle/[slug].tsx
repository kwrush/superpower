import React, { useEffect, useMemo } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Container from 'components/container';
import Header from 'components/header';
import Loader from 'components/loader';
import NoResult from 'components/no-result';
import PowerRadar, { Powers } from 'components/power-radar';
import PowerStats from 'components/power-stats';
import useBattle from 'hooks/use-battle';
import styles from 'styles/battle.module.css';

export default function Battle() {
  const { battle, fetchBattle, loading } = useBattle();
  const router = useRouter();
  const { slug } = router.query;

  useEffect(() => {
    const verfiyBattle = async () => {
      if (!battle && slug) {
        fetchBattle((slug as string).split('v'));
      }
    };

    verfiyBattle();
  }, [slug, fetchBattle, battle]);

  const arenaContent = useMemo(() => {
    if (battle) {
      const [player, opponent] = battle;
      const playerColor = '#395abd';
      const opponentColor = '#be1417';

      return (
        <>
          <Head>
            <title>{`Arena-${player.name} v ${opponent.name}`}</title>
          </Head>
          <Header />
          <h2
            className={styles.header}
          >{`${player.name} v ${opponent.name}`}</h2>
          <section className={styles.arena}>
            <PowerStats
              color={playerColor}
              avatar={player.image.url}
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
            <PowerStats
              color={opponentColor}
              avatar={opponent.image.url}
              name={opponent.name}
              alignment={opponent.biography.alignment}
              powers={opponent.powerstats}
            />
          </section>
        </>
      );
    }

    return <NoResult />;
  }, [battle]);

  return <Container>{loading ? <Loader /> : arenaContent}</Container>;
}
