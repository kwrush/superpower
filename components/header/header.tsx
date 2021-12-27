import React from 'react';
import Link from 'next/link';
import styles from './styles.module.css';

function Header() {
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
}

export default React.memo(Header);
