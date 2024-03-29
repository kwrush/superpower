import classNames from 'classnames';
import { PowerStatsAPI, Alignment } from '../../types/api.types';
import Avatar from '../avatar';
import styles from './styles.module.css';

interface PowerStatsProps {
  color?: string;
  avatar: string;
  name: string;
  alignment: Alignment;
  powers: PowerStatsAPI;
}

export default function PowerStats({
  color = '#395abd',
  avatar,
  name,
  alignment,
  powers,
}: PowerStatsProps) {
  const powersEntities = Object.entries(powers);
  const alignmentClasses = classNames(
    styles.alignment,
    styles[`alignment-${alignment}`],
  );

  return (
    <div className={styles.container}>
      <div className={styles.avatar}>
        <Avatar size="m" src={avatar} alt={name} />
        <svg width="100" height="10" viewBox="0 0 60 10">
          <line stroke={color} strokeWidth="3" x1="0" y1="5" x2="60" y2="5" />
          <circle cx="30" cy="5" r="4" fill={color} />
        </svg>
      </div>
      <h4 className={alignmentClasses}>
        Alignment: <span>{alignment}</span>
      </h4>
      <ul className={styles.list}>
        {powersEntities.map(([power, value]) => (
          <li key={power} className={styles['list-item']}>
            <span>{power}</span>
            <span>{value}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}
