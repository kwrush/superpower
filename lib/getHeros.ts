import { searchSuperHeroByName } from './api';
import { HeroAPI } from '../types/response';

const delay = (mills: number) =>
  new Promise<void>((resolve) => setTimeout(() => resolve(), mills));

// eslint-disable-next-line import/no-anonymous-default-export
export default (heros: string[], signal: AbortSignal) => {
  return heros.reduce<Promise<HeroAPI[]>>((accumulatedPromise, nextHero) => {
    // Have to add a delay to avoid http 429 error
    return accumulatedPromise.then((results) =>
      delay(1000).then(() =>
        searchSuperHeroByName(nextHero, signal).then((nextHeroData) => [
          ...results,
          nextHeroData,
        ]),
      ),
    );
  }, Promise.resolve([]));
};
