import React, { FC } from 'react';
import styles from './Home.module.css';

const Home: FC = () => {
  return (
    <div className={styles.Home}>
      <div className={styles['Home-header']}>
        <h2>Welcome to Superpower</h2>
      </div>
      <p className={styles['Home-intro']}>
        To get started, edit <code>src/App.js</code> or <code>src/Home.js</code> and save to reload.
      </p>
      <ul className={styles['Home-resources']}>
        <li>
          <a href="https://github.com/jaredpalmer/razzle">Docs</a>
        </li>
        <li>
          <a href="https://github.com/jaredpalmer/razzle/issues">Issues</a>
        </li>
        <li>
          <a href="https://palmer.chat">Community Slack</a>
        </li>
      </ul>
    </div>
  );
};

export default Home;
