import { FC } from 'react';
import { PowerStatsAPI } from '../../types/api.types';
import PowerRadar, { Powers } from '../power-radar';
import Avatar from '../avatar';
import styles from './styles.module.css';

interface PowerSummaryProps {
  name: string;
  avatar: string;
  powers: PowerStatsAPI;
}

const PowerSummary: FC<PowerSummaryProps> = ({ name, avatar, powers }) => {
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

export default PowerSummary;
