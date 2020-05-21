import React, { FC, useMemo } from 'react';
import Container from '~app/components/Container';
import PowerRadar, { Powers } from '~app/components/PowerRadar';
import PowersList from '~app/components/PowersList';
import useArena from '~app/hooks/useArena';
import Loader from '~app/components/Loader';
import useArenaData from '~app/hooks/useArenaData';
import NoResult from '~app/components/NoResult';
import styles from './Arena.module.css';

const Arena: FC = () => {
  const { playerIds, arenaData } = useArenaData();
  const { isLoading } = useArena(playerIds);

  const arenaContent = useMemo(() => {
    if (arenaData) {
      const [player, opponent] = arenaData;

      return (
        <>
          <h2 className={styles.header}>{`${player.name} v ${opponent.name}`}</h2>
          <section className={styles.arena}>
            <PowersList
              color="#395abd"
              avatar={player.avatar}
              name={player.name}
              alignment={player.alignment}
              powers={player.powers}
            />
            <PowerRadar captions={Object.keys(player.powers)}>
              {(cx, cy, size) => (
                <>
                  <Powers
                    powers={Object.values(opponent.powers)}
                    cx={cx}
                    cy={cy}
                    size={size}
                    color="#be1417"
                  />
                  <Powers
                    powers={Object.values(player.powers)}
                    cx={cx}
                    cy={cy}
                    size={size}
                    color="#395abd"
                  />
                </>
              )}
            </PowerRadar>
            <PowersList
              color="#be1417"
              avatar={opponent.avatar}
              name={opponent.name}
              alignment={opponent.alignment}
              powers={opponent.powers}
            />
          </section>
        </>
      );
    }

    return <NoResult />;
  }, [arenaData]);

  return <Container>{isLoading ? <Loader /> : arenaContent}</Container>;
};

export default Arena;
