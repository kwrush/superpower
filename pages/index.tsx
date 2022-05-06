import { useEffect } from 'react';
import Head from 'next/head';
import Battle from 'components/battle';
import Container from 'components/container';
import Header from 'components/header';
import Loader from 'components/loader';
import NoResult from 'components/no-result';
import SearchResults from 'components/search-results';
import Searchbox from 'components/searchbox';
import useBattle from 'hooks/use-battle';
import useProfile from 'hooks/use-profile';
import useSearch from 'hooks/use-search';
import { Hero } from 'types/app.types';
import { randomBattle } from 'utils/services';
import styles from '../styles/home.module.css';

interface HomeProps {
  battle: Hero[];
}

export async function getStaticProps() {
  const data = await randomBattle();
  return {
    props: { battle: data.map(({ response, ...profile }) => profile) },
    // update in 24 hours
    revalidate: 86400,
  };
}

export default function Home({ battle }: HomeProps) {
  const { results, search, loading } = useSearch();
  const { setProfile } = useProfile();
  const {
    battle: cachedBattle,
    createBattle,
    addToBattle,
    setBattle,
  } = useBattle();
  const showResults = !loading && results;

  useEffect(() => {
    if (cachedBattle == null) {
      setBattle(battle);
    }
  }, [battle, cachedBattle, setBattle]);

  return (
    <>
      <Head>
        <title>Superpower</title>
        <link rel="icon" href="/superman-logo.svg" />
      </Head>
      <Container>
        <Header />
        <Searchbox onSearch={search} />
        {loading && <Loader />}
        {showResults && (
          <div className={styles['search-results']}>
            {results!.length > 0 ? (
              <SearchResults
                results={results!}
                checkProfile={setProfile}
                addToBattle={addToBattle}
              />
            ) : (
              <NoResult />
            )}
          </div>
        )}
        {cachedBattle && (
          <Battle battle={cachedBattle} refresh={createBattle} />
        )}
      </Container>
    </>
  );
}
