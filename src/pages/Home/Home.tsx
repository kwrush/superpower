import React, { FC } from 'react';
import Header from '~app/components/Header';
import SearchInput from '~app/components/SearchInput';
import styles from './Home.module.css';

const Home: FC = () => {
  return (
    <div className={styles.Home}>
      <Header />
      <div className={styles['Home-header']}>
        <SearchInput
          onSearch={(query) => {
            // eslint-disable-next-line no-console
            console.log('Searching for ', query);
          }}
        />
      </div>
    </div>
  );
};

export default Home;
