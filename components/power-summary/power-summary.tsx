import { PowerStatsAPI } from '../../types/api.types';
import Avatar from '../avatar';
import PowerRadar, { Powers } from '../power-radar';
import styles from './styles.module.css';

interface PowerSummaryProps {
  name: string;
  avatar: string;
  powers: PowerStatsAPI;
}

export default function PowerSummary({
  name,
  avatar,
  powers,
}: PowerSummaryProps) {
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
}
