import React, { FC, useMemo } from 'react';
import { PowerStatsAPI } from '~app/types/response';
import styles from './PowerRadar.module.css';
import Scales from './Scales';
import Axes from './Axes';
import Powers from './Powers';

interface PowerRadarProps {
  powers: PowerStatsAPI;
  color?: string;
  backgroundColor?: string;
  scalesNumber?: number;
}

const PowerRadar: FC<PowerRadarProps> = ({ powers, scalesNumber = 5 }) => {
  const cx = 160;
  const cy = 120;
  const radius = 80;
  const stats = useMemo(() => {
    const captions = Object.entries(powers).map(
      ([name, value]) => `${name.charAt(0).toUpperCase() + name.slice(1)}(${value})`,
    );
    const powerValues = Object.values(powers);

    return {
      powers: powerValues,
      captions,
    };
  }, [powers]);

  return (
    <div className={styles.radar}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width="100%"
        viewBox="0 0 320 240"
        preserveAspectRatio="xMidYMid meet"
        className={styles['radar-chart']}
      >
        <g>
          <g>
            <Scales
              polarNumber={stats.captions.length}
              scalesNumber={scalesNumber}
              maxRadius={radius}
              cx={cx}
              cy={cy}
            />
          </g>
          <g>
            <Axes axisLength={radius * 2} captions={stats.captions} cx={cx} cy={cy} />
          </g>
          <g>
            <Powers dot powers={stats.powers} cx={cx} cy={cy} size={radius * 2} color="#395abd" />
          </g>
        </g>
      </svg>
    </div>
  );
};

export default PowerRadar;
