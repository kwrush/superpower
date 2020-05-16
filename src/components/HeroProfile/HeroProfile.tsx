import React, { FC } from 'react';
import PowerRadar from '../PowerRadar';
import { PowerStatsAPI } from '~app/types/response';
import styles from './HeroProfile.module.css';

interface HeroProfileProps {
  name: string;
  avatar: string;
  powers: PowerStatsAPI;
}

const HeroProfile: FC<HeroProfileProps> = ({ name, avatar, powers }) => (
  <section className={styles.profile}>
    <figure>
      <img src={avatar} alt={name} />
    </figure>
    <PowerRadar powers={powers} />
  </section>
);

export default HeroProfile;
