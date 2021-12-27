import styles from './styles.module.css';

export default function NoResult() {
  return (
    <div className={styles.container}>
      <p className={styles.alert}>
        <span className={styles.emoji} role="img" aria-label="Supervillain">
          🦹‍♂️
        </span>
        Heros not found
      </p>
    </div>
  );
}
