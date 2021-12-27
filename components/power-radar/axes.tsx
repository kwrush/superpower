import React, { FC } from 'react';
import { polarToX, polarToY, pointsToPolyline, getAngle } from 'utils/draw';

interface AxesProps {
  axisLength: number;
  captions: string[];
  cx: number;
  cy: number;
}

function Axes({ axisLength, captions, cx, cy }: AxesProps) {
  const radius = axisLength / 2;
  const axisNum = captions.length;

  const axes = captions.map((caption, index) => {
    const angle = getAngle(index, axisNum);
    const px = cx + polarToX(angle, radius);
    const py = cy + polarToY(angle, radius);

    const textAnchor =
      angle > Math.PI / 2 && angle < Math.PI * 1.5 ? 'end' : 'start';
    let textBaseline = 'central';
    if (angle > 0 && angle < Math.PI) {
      textBaseline = 'text-before-edge';
    }

    if (angle > Math.PI && angle < Math.PI * 2) {
      textBaseline = 'text-after-edge';
    }

    return {
      caption,
      points: pointsToPolyline([
        [cx, cy],
        [px, py],
      ]),
      px: px.toFixed(4),
      py: py.toFixed(4),
      textAnchor,
      textBaseline,
    };
  });

  return (
    <>
      {axes.map((axis, index) => (
        <g key={index}>
          <polyline points={axis.points} stroke="#6e698f" strokeWidth="0.2" />
          <text
            x={axis.px}
            y={axis.py}
            dominantBaseline={axis.textBaseline}
            textAnchor={axis.textAnchor}
          >
            {axis.caption}
          </text>
        </g>
      ))}
    </>
  );
}

export default React.memo(Axes);
