import React, { FC } from 'react';
import PowerRadar, { Powers } from '../PowerRadar';
import { PowerStatsAPI } from '~app/types/response';
import styles from './HeroProfile.module.css';
import Avatar from '../Avatar';

interface HeroProfileProps {
  name: string;
  avatar: string;
  powers: PowerStatsAPI;
}

const HeroProfile: FC<HeroProfileProps> = ({ name, avatar, powers }) => {
  const captions = Object.entries(powers).map(
    ([power, value]) => `${power.charAt(0).toUpperCase() + power.slice(1)}(${value})`,
  );
  const powerValues = Object.values(powers);

  return (
    <section className={styles.profile}>
      <Avatar src={avatar} alt={name} />
      <PowerRadar captions={captions}>
        {(cx, cy, size) => (
          <Powers powers={powerValues} cx={cx} cy={cy} size={size} color="#395abd" />
        )}
      </PowerRadar>
    </section>
  );
};

export default HeroProfile;
