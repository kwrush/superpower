import { searchSuperHeroById } from './api';
import { HeroAPI } from '~app/types/response';

const HEROS = [
  { id: 495, name: 'superman' },
  { id: 51, name: 'batman' },
  { id: 476, name: 'spider-man' },
  { id: 250, name: 'iron-man' },
  { id: 106, name: 'captain-america' },
  { id: 236, name: 'hulk' },
  { id: 148, name: 'deadpool' },
  { id: 191, name: 'flash' },
  { id: 506, name: 'thanos' },
  { id: 140, name: 'darkseid' },
  { id: 553, name: 'wonder-woman' },
  { id: 163, name: 'doomsday' },
  { id: 481, name: 'star-lord' },
  { id: 550, name: 'wolverine' },
  { id: 160, name: 'doctor-strange' },
  { id: 23, name: 'ant-man' },
];

// select the given number of heros randomly from HEROS array
const selectHeros = (amount: number) => HEROS.sort(() => 0.5 - Math.random()).slice(0, amount);

const delay = (mills: number) => new Promise<void>((resolve) => setTimeout(() => resolve(), mills));

export const getInitialHeros = (signal: AbortSignal) => {
  const initialHeros = selectHeros(3);
  return initialHeros.reduce((accumulatedPromise, nextHero) => {
    // Have to add a delay otherwise http 429 error occurs
    return accumulatedPromise.then((results) =>
      delay(1000).then(() =>
        searchSuperHeroById(nextHero.id, signal).then((nextHeroData) => [...results, nextHeroData]),
      ),
    );
  }, Promise.resolve([] as HeroAPI[]));
};
