export const polarToX = (angle: number, distance: number) => Math.cos(angle) * distance;

export const polarToY = (angle: number, distance: number) => Math.sin(angle) * distance;

export const pointsToPath = (points: number[][]) => {
  let p = '';
  // eslint-disable-next-line no-plusplus
  for (let i = 0; i < points.length; i++) {
    const prefix = i > 0 ? 'L' : 'M';
    p += `${prefix}${points[i][0].toFixed(4)},${points[i][1].toFixed(4)}`;
  }

  return `${p} z`;
};

export const pointsToPolyline = (points: Array<number[]>) =>
  points.map((point) => `${point[0].toFixed(4)},${point[1].toFixed(4)}`).join(' ');
