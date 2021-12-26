import { FC, ReactElement } from 'react';
import styles from './styles.module.css';
import Scales from './scales';
import Axes from './axes';

interface PowerRadarProps {
  captions: string[];
  color?: string;
  backgroundColor?: string;
  scalesNumber?: number;
  children: (cx: number, cy: number, size: number) => ReactElement;
}

const PowerRadar: FC<PowerRadarProps> = ({
  captions,
  scalesNumber = 5,
  children,
}) => {
  const cx = 160;
  const cy = 120;
  const radius = 80;

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
              polarNumber={captions.length}
              scalesNumber={scalesNumber}
              maxRadius={radius}
              cx={cx}
              cy={cy}
            />
          </g>
          <g>
            <Axes axisLength={radius * 2} captions={captions} cx={cx} cy={cy} />
          </g>
          <g>{children(cx, cy, radius * 2)}</g>
        </g>
      </svg>
    </div>
  );
};

export default PowerRadar;
