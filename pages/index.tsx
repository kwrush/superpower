import { FC, useEffect } from 'react';
import Head from 'next/head';
import { Hero } from '../types/app.types';
import Header from 'components/header';
import Loader from 'components/loader';
import SearchResults from 'components/search-results';
import Battle from 'components/battle';
import NoResult from 'components/no-result';
import Searchbox from 'components/searchbox';
import useSearch from 'hooks/use-search';
import useProfile from 'hooks/use-profile';
import { randomBattle } from '../utils/services';
import useBattle from 'hooks/use-battle';

const Home = () => {
  const { results, search, loading } = useSearch();
  const { setProfile } = useProfile();
  const { battle, createBattle, addToBattle } = useBattle();
  const showResults = !loading && results;

  useEffect(() => {
    const initBattle = async () => {
      if (!battle) {
        await createBattle();
      }
    };
    initBattle();
  }, [battle, createBattle]);

  return (
    <div>
      <Head>
        <title>Superpower</title>
        <link rel="icon" href="/superman-logo.svg" />
      </Head>
      <div>
        <Header />
        <Searchbox onSearch={search} />
        {loading && <Loader />}
        {showResults &&
          (results!.length > 0 ? (
            <SearchResults
              results={results!}
              checkProfile={setProfile}
              addToBattle={addToBattle}
            />
          ) : (
            <NoResult />
          ))}
        {battle && <Battle battle={battle} refresh={createBattle} />}
      </div>
    </div>
  );
};

export default Home;
