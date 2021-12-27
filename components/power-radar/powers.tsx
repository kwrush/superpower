import React, { useMemo } from 'react';
import { getAngle, polarToX, polarToY, pointsToPath } from 'utils/draw';

interface PowersProps {
  powers: number[];
  cx: number;
  cy: number;
  color?: string;
  size: number;
  opacity?: number;
}

function Powers({
  powers,
  cx,
  cy,
  color = '#555',
  size,
  opacity = 0.2,
}: PowersProps) {
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
    <g>
      {stats.points.map((point) => (
        <circle
          key={point.join(',')}
          cx={point[0].toFixed(4)}
          cy={point[1].toFixed(4)}
          r={3}
          fill={color}
        />
      ))}
      <path
        d={stats.path}
        stroke={color}
        fill={color}
        strokeWidth="2"
        fillOpacity={opacity}
      />
    </g>
  );
}

export default React.memo(Powers);
