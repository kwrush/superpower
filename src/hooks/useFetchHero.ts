import { useEffect, useState, useCallback, useContext } from 'react';
import { searchSuperHeroById } from '~app/lib/api';
import { HeroAPI } from '~app/types/response';
import { HeroContext } from '~app/containers/HeroProvider';

const useFetchHero = (heroId: number) => {
  const [hero, setHero] = useState<HeroAPI>();
  const { arenaPlayers, searchResult } = useContext(HeroContext);
  const [isLoading, setIsLoading] = useState(true);

  const fetchHero = useCallback(
    async (id: number, signal: AbortSignal) => {
      try {
        const localHeros = arenaPlayers && [...arenaPlayers, searchResult];
        const localHero = localHeros?.find((local) => local?.id === id);

        if (localHero) {
          setHero(localHero);
        } else {
          setIsLoading(true);
          const data = await searchSuperHeroById(id, signal);
          setHero(data);
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }

      setIsLoading(false);
    },
    [searchResult, setIsLoading, arenaPlayers],
  );

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    fetchHero(heroId, signal);

    return () => abortController.abort();
  }, [heroId, fetchHero]);

  return { hero, isLoading };
};

export default useFetchHero;
