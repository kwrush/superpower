import React, { FC } from 'react';
import PowerRadar, { Powers } from '../PowerRadar';
import { PowerStatsAPI } from '../../types/response';
import styles from './HeroPowersProfile.module.css';
import Avatar from '../Avatar';

interface HeroPowersProfileProps {
  name: string;
  avatar: string;
  powers: PowerStatsAPI;
}

const HeroPowersProfile: FC<HeroPowersProfileProps> = ({
  name,
  avatar,
  powers,
}) => {
  const captions = Object.entries(powers).map(
    ([power, value]) => `${power}(${value})`,
  );
  const powerValues = Object.values(powers);

  return (
    <section className={styles.profile}>
      <Avatar src={avatar} alt={name} />
      <PowerRadar captions={captions}>
        {(cx, cy, size) => (
          <Powers
            powers={powerValues}
            cx={cx}
            cy={cy}
            size={size}
            color="#395abd"
          />
        )}
      </PowerRadar>
    </section>
  );
};

export default HeroPowersProfile;
