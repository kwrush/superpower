import React, { FC, useEffect, useMemo } from 'react';
import Header from '../components/Header';
import SearchInput from '../components/SearchInput';
import styles from '../styles/Home.module.css';
import Container from '../components/Container';
import Loader from '../components/Loader';
import ArenaCard from '../components/ArenaCard';
import SearchResult from '../components/SearchResult';
import NoResult from '../components/NoResult';
import useSearch from '../hooks/useSearch';
import useArena from '../hooks/useArena';
import useAbortSignal from '../hooks/useAbortSignal';
import Head from 'next/head';

const Home: FC = () => {
  const { isFetching, arenaPlayers, addArenaPlayer, initArena } = useArena();
  const { isSearching, searchResult, search, clearSearchResult } = useSearch();
  const abortSignal = useAbortSignal();

  const renderSearch = () => {
    if (isSearching) {
      return <Loader />;
    }

    if (searchResult === null) {
      return <NoResult />;
    }

    return (
      searchResult && (
        <SearchResult
          searchResult={searchResult}
          addPlayer={addArenaPlayer}
          onClear={clearSearchResult}
        />
      )
    );
  };

  const ArenaContent = useMemo(() => {
    if (isFetching) {
      return <Loader />;
    }

    return arenaPlayers && <ArenaCard players={arenaPlayers} />;
  }, [isFetching, arenaPlayers]);

  useEffect(() => {
    initArena({ signal: abortSignal });
  }, [initArena, abortSignal]);

  return (
    <Container>
      <Head>
        <title>Superpower</title>
      </Head>
      <Header />
      <div className={styles.search}>
        <SearchInput onSearch={search} onClear={clearSearchResult} />
      </div>
      {renderSearch()}
      {ArenaContent}
    </Container>
  );
};

export default Home;
