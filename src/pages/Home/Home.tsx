import React, { FC, useContext } from 'react';
import Header from '~app/components/Header';
import SearchInput from '~app/components/SearchInput';
import styles from './Home.module.css';
import Container from '~app/components/Container';
import Grid from '~app/components/Grid';
import Loader from '~app/components/Loader';
import { HeroContext } from '~app/containers/HeroProvider';

const Home: FC = () => {
  const { heros, isLoading, isSearching, clearSearchResult, searchResult, searchHero } = useContext(
    HeroContext,
  );

  const renderContent = () => {
    if (searchResult) {
      return <Grid heros={searchResult} />;
    }

    return heros && <Grid heros={heros} />;
  };

  return (
    <Container>
      <Header />
      <div className={styles['Home-header']}>
        <SearchInput onSearch={searchHero} onClear={clearSearchResult} />
      </div>
      {isSearching || isLoading ? <Loader /> : renderContent()}
    </Container>
  );
};

export default Home;
