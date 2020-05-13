import React, { FC, useMemo, ReactElement } from 'react';
import { PowerStatsAPI } from '~app/types/response';
import styles from './PowerRadar.module.css';
import { polarToX, polarToY, pointsToPolyline, pointsToPath } from '~app/lib/draw';

interface PowerRadarProps {
  powers: PowerStatsAPI;
  color?: string;
  backgroundColor?: string;
  scalesCount: number;
  size: number;
}

interface ScaleProps {
  origin: string;
  radius: number;
}

interface AxisProps {
  caption: string;
  angle: number;
  axisSize: number;
  origin: number[];
}

interface StatsProps {
  points: number[][];
  color?: string;
}

const Scale: FC<ScaleProps> = ({ origin, radius }) => (
  <circle cx={origin} cy={origin} r={radius} fill="#fafafa" stroke="#999" strokeWidth="0.2" />
);

const Axis: FC<AxisProps> = ({ angle, axisSize, caption, origin }) => {
  const px = origin[0] + polarToX(angle, axisSize);
  const py = origin[1] + polarToY(angle, axisSize);

  return (
    <>
      <polyline points={pointsToPolyline([origin, [px, py]])} stroke="#555" strokeWidth="0.2" />
      <text x={px.toFixed(4)} y={py.toFixed(4)}>
        {caption}
      </text>
    </>
  );
};

const Stats: FC<StatsProps> = ({ points, color = '#555' }) => (
  <path d={pointsToPath(points)} stroke={color} strokeWidth="2" fillOpacity="0.2" />
);

const PowerRadar: FC<PowerRadarProps> = ({ powers, scalesCount, size }) => {
  const origin = size / 2;

  const scalesGroup: ReactElement[] = useMemo(
    () =>
      [...Array(scalesCount)].reduceRight(
        (acc, _, index) =>
          acc.concat(
            <Scale
              key={index}
              origin={origin.toFixed(4)}
              radius={(((index + 1) / scalesCount) * size) / 2}
            />,
          ),
        [],
      ),
    [scalesCount, size, origin],
  );

  const axisGroup: ReactElement[] = useMemo(() => {
    const captions = Object.entries(powers).map(
      ([caption, value]) => `${caption.charAt(0).toUpperCase() + caption.slice(1)}(${value})`,
    );
    const axes = captions.map((caption, index, all) => ({
      caption,
      angle: (Math.PI * 2 * index) / all.length,
    }));

    return axes.map((axis, index) => (
      <Axis
        key={index}
        angle={axis.angle}
        axisSize={size / 2}
        caption={axis.caption}
        origin={[origin, origin]}
      />
    ));
  }, [size, powers, origin]);

  const statsShape: ReactElement = useMemo(() => {
    const points = Object.values(powers).map((power, index, all) => {
      const angle = (Math.PI * 2 * index) / all.length;
      const distance = 0.5 * size * (power / 100);
      const px = origin + polarToX(angle, distance);
      const py = origin + polarToY(angle, distance);

      return [px, py];
    });

    return <Stats points={points} />;
  }, [powers, size, origin]);

  return (
    <div className={styles.radar}>
      <svg
        version="1.0"
        xmlns="http://www.w3.org/2000/svg"
        width={size}
        height={size}
        viewBox={`0 0 ${size} ${size}`}
      >
        <g>
          <g key="scales">{scalesGroup}</g>
          <g key="axes">{axisGroup}</g>
          <g key="stats">{statsShape}</g>
        </g>
      </svg>
    </div>
  );
};

export default PowerRadar;
