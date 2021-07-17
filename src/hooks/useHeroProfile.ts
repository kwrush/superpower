import { useEffect, useState, useCallback } from 'react';
import { searchSuperHeroByName } from '~app/lib/api';
import { HeroAPI } from '~app/types/response';
import useArena from './useArena';
import useSearch from './useSearch';
import useAbortSignal from './useAbortSignal';

const useHeroProfile = (heroName: string) => {
  const [hero, setHero] = useState<HeroAPI>();
  const [isFetching, setIsFetching] = useState(true);
  const { arenaPlayers } = useArena();
  const { searchResult } = useSearch();
  const abortSignal = useAbortSignal();

  const fetchHero = useCallback(
    async (name: string, signal: AbortSignal) => {
      try {
        const cachedData = arenaPlayers
          ? [...arenaPlayers, searchResult]
          : [searchResult];
        const localHero = cachedData?.find((local) => local?.name === name);

        if (localHero) {
          setHero(localHero);
        } else {
          setIsFetching(true);
          const data = await searchSuperHeroByName(name, signal);
          setHero(data);
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }

      setIsFetching(false);
    },
    [searchResult, setIsFetching, arenaPlayers],
  );

  useEffect(() => {
    fetchHero(heroName, abortSignal);
  }, [heroName, fetchHero, abortSignal]);

  return { hero, isFetching };
};

export default useHeroProfile;
