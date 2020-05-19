import React, { FC, useContext, useCallback } from 'react';
import Header from '~app/components/Header';
import SearchInput from '~app/components/SearchInput';
import styles from './Home.module.css';
import Container from '~app/components/Container';
import Loader from '~app/components/Loader';
import Arena from '~app/components/Arena';
import { HeroContext } from '~app/containers/HeroProvider';
import SearchResult from '~app/components/SearchResult';
import { HeroAPI } from '~app/types/response';

const Home: FC = () => {
  const {
    arenaPlayers,
    isLoading,
    isSearching,
    clearSearchResult,
    searchResult,
    searchHero,
    setArenaPlayers,
  } = useContext(HeroContext);

  const addArenaPlayer = useCallback(
    (player: HeroAPI) => {
      if (
        setArenaPlayers &&
        arenaPlayers &&
        arenaPlayers.findIndex((existedPlayer) => existedPlayer.id === player.id) < 0
      ) {
        const newPlayers = [...arenaPlayers, player].slice(-2);
        setArenaPlayers(newPlayers);
      }
    },
    [arenaPlayers, setArenaPlayers],
  );

  const renderContent = () => {
    if (isLoading) {
      return <Loader />;
    }

    return (
      <>
        <div className={styles.header}>
          <SearchInput onSearch={searchHero} onClear={clearSearchResult} />
        </div>
        {isSearching ? (
          <Loader />
        ) : (
          searchResult !== undefined && (
            <SearchResult searchResult={searchResult} addPlayer={addArenaPlayer} />
          )
        )}
        {arenaPlayers && <Arena player={arenaPlayers[0]} opponent={arenaPlayers[1]} />}
      </>
    );
  };

  return (
    <Container>
      <Header />
      {renderContent()}
    </Container>
  );
};

export default Home;
