const HEROS = [
  644, 70, 38, 720, 204, 637, 370, 230, 732, 620, 332, 149, 659, 157, 226, 225,
  655, 717, 527, 423, 517, 322,
];

const shuffle = <T>(arr: T[]) => {
  const shuffled = arr.slice(0);
  for (let i = shuffled.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [shuffled[i], shuffled[j]] = [shuffled[j], shuffled[i]];
  }

  return shuffled;
};

const randomHeros = (amount: number) => shuffle(HEROS).slice(0, amount);

export default randomHeros;
