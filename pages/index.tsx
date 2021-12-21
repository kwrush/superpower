import { FC } from 'react';
import Head from 'next/head';
import { Hero } from '../types/app.types';
import Header from 'components/header';
import Loader from 'components/loader';
import SearchResults from 'components/search-results';
import NoResult from 'components/no-result';
import Searchbox from 'components/searchbox';
import useSearch from 'hooks/use-search';
import useProfile from 'hooks/use-profile';

interface Props {
  battle: Hero[];
}

const Home: FC<Props> = ({ battle }) => {
  const { results, search, loading } = useSearch();
  const { setProfile } = useProfile();
  const showResults = !loading && results;

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
          (results.length > 0 ? (
            <SearchResults
              results={results!}
              checkProfile={setProfile}
              addToBattle={(h) => console.log(h)}
            />
          ) : (
            <NoResult />
          ))}
      </div>
    </div>
  );
};

export default Home;
