const HEROS = [
  { id: 495, name: 'superman' },
  { id: 52, name: 'batman' },
  { id: 476, name: 'spider-man' },
  { id: 250, name: 'iron-man' },
  { id: 106, name: 'captain-america' },
  { id: 236, name: 'hulk' },
  { id: 148, name: 'deadpool' },
  { id: 191, name: 'flash' },
  { id: 506, name: 'thanos' },
  { id: 140, name: 'darkseid' },
  { id: 553, name: 'wonder-woman' },
  { id: 30, name: 'aquaman' },
  { id: 510, name: 'thor' },
  { id: 481, name: 'star-lord' },
  { id: 550, name: 'wolverine' },
  { id: 160, name: 'doctor-strange' },
  { id: 307, name: 'loki' },
  { id: 80, name: 'black-widow' },
];

// select the given number of heros randomly from HEROS array
export default (amount: number) =>
  HEROS.sort(() => 0.5 - Math.random())
    .slice(0, amount)
    .map((hero) => hero.name);
