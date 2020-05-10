import React, { FC } from 'react';
import Header from '~app/components/Header';
import SearchInput from '~app/components/SearchInput';
import styles from './Home.module.css';
import Container from '~app/components/Container';
import Grid from '~app/components/Grid';
import Loader from '~app/components/Loader';

const mock = {
  id: 476,
  name: 'Spider-Man',
  slug: '620-spider-man',
  images: {
    sm: 'https://cdn.rawgit.com/akabab/superhero-api/0.2.0/api/images/sm/620-spider-man.jpg',
  },
};

const Home: FC = () => {
  const heros = Array(4)
    .fill(mock)
    .map((hero, i) => ({ ...hero, id: hero.id + i }));
  return (
    <>
      <Container>
        <Header />
        <div className={styles['Home-header']}>
          <SearchInput
            onSearch={(query) => {
              // eslint-disable-next-line no-console
              console.log('Searching for ', query);
            }}
          />
          <Loader />
          <Grid heros={heros} />
        </div>
      </Container>
    </>
  );
};

export default Home;
