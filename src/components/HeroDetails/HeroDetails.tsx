import React, { FC } from 'react';
import { BiographyAPI, AppearanceAPI } from '~app/types/response';
import styles from './HeroDetails.module.css';

interface HeroDetailsProps {
  biography: BiographyAPI;
  appearance: AppearanceAPI;
}

const HeroDetails: FC<HeroDetailsProps> = ({ biography, appearance }) => (
  <section className={styles.details}>
    <ul className={styles.list}>
      <h2>Appearance</h2>
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
      <h2>Biography</h2>
      <li className={styles.item}>
        <span>Full Name</span>
        <span>{biography.fullName}</span>
      </li>
      <li className={styles.item}>
        <span>Aliases</span>
        <span>{biography.aliases.join(', ')}</span>
      </li>
      <li className={styles.item}>
        <span>Place of Birth</span>
        <span>{biography.placeOfBirth}</span>
      </li>
      <li className={styles.item}>
        <span>Publisher</span>
        <span>{biography.publisher}</span>
      </li>
    </ul>
  </section>
);

export default HeroDetails;
