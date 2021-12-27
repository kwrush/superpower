import { BiographyAPI, AppearanceAPI } from '../../types/api.types';
import styles from './styles.module.css';

interface ProfileSummaryProps {
  biography: BiographyAPI;
  appearance: AppearanceAPI;
}

export default function ProfileSummary({
  biography,
  appearance,
}: ProfileSummaryProps) {
  return (
    <section className={styles.details}>
      <ul className={styles.list}>
        <h3>Appearance</h3>
        <li className={styles.item}>
          <span>Gender</span>
          <span>{appearance.gender}</span>
        </li>
        <li className={styles.item}>
          <span>Race</span>
          <span>{appearance.race}</span>
        </li>
        <li className={styles.item}>
          <span>Height</span>
          <span>{appearance.height[1]}</span>
        </li>
        <li className={styles.item}>
          <span>Weight</span>
          <span>{appearance.weight[1]}</span>
        </li>
      </ul>
      <ul className={styles.list}>
        <h3>Biography</h3>
        <li className={styles.item}>
          <span>Full Name</span>
          <span>{biography['full-name']}</span>
        </li>
        <li className={styles.item}>
          <span>Aliases</span>
          <span>{biography.aliases.join(', ')}</span>
        </li>
        <li className={styles.item}>
          <span>Place of Birth</span>
          <span>{biography['place-of-birth']}</span>
        </li>
        <li className={styles.item}>
          <span>Publisher</span>
          <span>{biography.publisher}</span>
        </li>
      </ul>
    </section>
  );
}
