import { FC } from 'react';
import styles from './styles.module.css';

const NoResult: FC = () => (
  <div className={styles.container}>
    <p className={styles.alert}>
      <span className={styles.emoji} role="img" aria-label="Supervillain">
        🦹‍♂️
      </span>
      Heros not found
    </p>
  </div>
);

export default NoResult;
