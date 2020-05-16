import { useEffect, useState, useCallback, useContext } from 'react';
import { searchSuperHeroById } from '~app/lib/api';
import { HeroAPI } from '~app/types/response';
import { HeroContext } from '~app/containers/HeroProvider';
import { HeroEntity } from '~app/types/app';

const useFetchHero = (heroId: number) => {
  const [hero, setHero] = useState<HeroAPI>();
  const { heros, searchResult } = useContext(HeroContext);
  const [isLoading, setIsLoading] = useState(true);

  const fetchHero = useCallback(
    async (id: number, signal: AbortSignal) => {
      try {
        const localHeros = { ...heros, ...searchResult } as HeroEntity;
        if (localHeros[id]) {
          setHero(localHeros[id]);
        } else {
          const data = await searchSuperHeroById(id, signal);
          setHero(data);
        }
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }

      setIsLoading(false);
    },
    [setHero, heros, searchResult, setIsLoading],
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
