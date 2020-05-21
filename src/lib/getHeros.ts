import { searchSuperHeroById } from './api';
import { HeroAPI } from '~app/types/response';

const delay = (mills: number) => new Promise<void>((resolve) => setTimeout(() => resolve(), mills));

export default (heroIds: number[], signal: AbortSignal) => {
  return heroIds.reduce((accumulatedPromise, nextId) => {
    // Have to add a delay otherwise http 429 error occurs
    return accumulatedPromise.then((results) =>
      delay(1000).then(() =>
        searchSuperHeroById(nextId, signal).then((nextHeroData) => [...results, nextHeroData]),
      ),
    );
  }, Promise.resolve([] as HeroAPI[]));
};
