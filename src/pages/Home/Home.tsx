import React, { FC, useContext } from 'react';
import { Helmet } from 'react-helmet';
import Header from '~app/components/Header';
import SearchInput from '~app/components/SearchInput';
import styles from './Home.module.css';
import Container from '~app/components/Container';
import Loader from '~app/components/Loader';
import ArenaCard from '~app/components/ArenaCard';
import { HeroContext } from '~app/containers/HeroProvider';
import SearchResult from '~app/components/SearchResult';
import useArena from '~app/hooks/useArena';
import useSearchHero from '~app/hooks/useSearchHero';

const Home: FC = () => {
  const { arenaPlayers, clearSearchResult, addArenaPlayer } = useContext(HeroContext);
  const { isLoading } = useArena();

  const { isSearching, searchHero, searchResult } = useSearchHero();

  const renderSearch = () => {
    if (isSearching) {
      return <Loader />;
    }

    return (
      searchResult !== undefined && (
        <SearchResult searchResult={searchResult} addPlayer={addArenaPlayer} />
      )
    );
  };

  const renderArena = () => {
    if (isLoading) {
      return <Loader />;
    }

    return arenaPlayers && <ArenaCard player={arenaPlayers[0]} opponent={arenaPlayers[1]} />;
  };

  return (
    <Container>
      <Helmet>
        <title>Superpower</title>
      </Helmet>
      <Header />
      <div className={styles.search}>
        <SearchInput onSearch={searchHero} onClear={clearSearchResult} />
      </div>
      {renderSearch()}
      {renderArena()}
    </Container>
  );
};

export default Home;
