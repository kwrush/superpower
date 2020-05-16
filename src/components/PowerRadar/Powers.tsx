import React, { FC, useMemo } from 'react';
import { getAngle, polarToX, polarToY, pointsToPath } from '~app/lib/draw';

interface PowersProps {
  powers: number[];
  cx: number;
  cy: number;
  dot?: boolean;
  color?: string;
  size: number;
  opacity?: number;
}

const Powers: FC<PowersProps> = ({
  dot = false,
  powers,
  cx,
  cy,
  color = '#555',
  size,
  opacity = 0.2,
}) => {
  const stats = useMemo(() => {
    const points = powers.map((power, index, all) => {
      const angle = getAngle(index, all.length);
      const rate = 0.5 * size * (power / 100);
      const px = cx + polarToX(angle, rate);
      const py = cy + polarToY(angle, rate);

      return [px, py];
    });
    return {
      points,
      path: pointsToPath(points),
    };
  }, [powers, cx, cy, size]);

  return (
    <>
      {dot &&
        stats.points.map((point) => (
          <circle
            key={point.join(',')}
            cx={point[0].toFixed(4)}
            cy={point[1].toFixed(4)}
            r={3}
            fill={color}
          />
        ))}
      <path d={stats.path} stroke={color} fill={color} strokeWidth="2" fillOpacity={opacity} />
    </>
  );
};

export default React.memo(Powers);