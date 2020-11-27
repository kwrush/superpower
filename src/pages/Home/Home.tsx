import React, { FC, useEffect, useMemo } from 'react';
import { Helmet } from 'react-helmet';
import Header from '~app/components/Header';
import SearchInput from '~app/components/SearchInput';
import styles from './Home.module.css';
import Container from '~app/components/Container';
import Loader from '~app/components/Loader';
import ArenaCard from '~app/components/ArenaCard';
import SearchResult from '~app/components/SearchResult';
import NoResult from '~app/components/NoResult';
import useSearch from '~app/hooks/useSearch';
import useArena from '~app/hooks/useArena';
import useAbortSignal from '~app/hooks/useAbortSignal';

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
      <Helmet>
        <title>Superpower</title>
      </Helmet>
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
