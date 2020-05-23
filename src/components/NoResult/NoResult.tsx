import React, { FC } from 'react';
import styles from './NoResult.module.css';

const NoResult: FC = () => (
  <div className={styles.wrapper}>
    <p className={styles.alert}>
      <span className={styles.emoji} role="img" aria-label="Supervillain">
        🦹‍♂️
      </span>
      No heros found
    </p>
  </div>
);

export default NoResult;
