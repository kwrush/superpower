import React, { FC } from 'react';
import { getAngle, polarToX, polarToY, pointsToPath } from '~app/lib/draw';

interface ScalesProps {
  polarNumber: number;
  scalesNumber: number;
  maxRadius: number;
  cx: number;
  cy: number;
}

const Scales: FC<ScalesProps> = ({ polarNumber, scalesNumber, maxRadius, cx, cy }) => {
  const scales: string[] = [...Array(scalesNumber)].reduceRight((acc, curr, scaleIndex) => {
    const radius = ((scaleIndex + 1) / scalesNumber) * maxRadius;

    const polars = [...Array(polarNumber)].map((_, index) => {
      const angle = getAngle(index, polarNumber);
      const px = cx + polarToX(angle, radius);
      const py = cy + polarToY(angle, radius);

      return [px, py];
    });

    return [...acc, pointsToPath(polars)];
  }, []);

  return (
    <>
      {scales.map((scale, index) => (
        <path key={index} d={scale} fill="#f3f3f5" stroke="#6e698f" strokeWidth="0.2" />
      ))}
    </>
  );
};

export default React.memo(Scales);
