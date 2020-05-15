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
  <div>
    <header>
      <h2>{name}</h2>
    </header>
    <div className={styles.profile}>
      <div>
        <img src={avatar} alt={name} />
      </div>
      <PowerRadar powers={powers} />
    </div>
  </div>
);

export default HeroProfile;
