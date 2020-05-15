import { useEffect, useState, useCallback } from 'react';
import { searchSuperHeroById } from '~app/lib/api';
import { HeroAPI } from '~app/types/response';

const useFetchHero = (heroId: number) => {
  const [hero, setHero] = useState<HeroAPI>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchHero = useCallback(
    async (id: number, signal: AbortSignal) => {
      try {
        const data = await searchSuperHeroById(id, signal);
        setHero(data);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }

      setIsLoading(false);
    },
    [setHero, setIsLoading],
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
