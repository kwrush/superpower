import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h3>
        <Link to="/" className={styles['header-link']}>
          <span role="img" aria-label="superhero" className={styles.emoji}>
            🦸
          </span>
          Superpower
        </Link>
      </h3>
    </header>
  );
};

export default Header;
