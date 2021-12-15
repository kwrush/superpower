import Link from 'next/link';
import React, { FC } from 'react';
import styles from './Header.module.css';

const Header: FC = () => {
  return (
    <header className={styles.header}>
      <h2>
        <Link href="/">
          <a className={styles['header-link']}>
            <span role="img" aria-label="superhero" className={styles.emoji}>
              🦸‍♂
            </span>
            Superpower
          </a>
        </Link>
      </h2>
    </header>
  );
};

export default React.memo(Header);
