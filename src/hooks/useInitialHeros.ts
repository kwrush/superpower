import { useEffect, useState, useCallback } from 'react';
import { getInitialHeros } from '~app/lib/getInitialHeros';
import { HeroEntity } from '~app/types/app';
import normalize from '~app/lib/normalize';

const useInitialHeros = () => {
  const [heros, setHeros] = useState<HeroEntity>();
  const [isLoading, setIsLoading] = useState(true);

  const fetchInitialHeros = useCallback(
    async (signal: AbortSignal) => {
      try {
        const initialHeros = await getInitialHeros(signal);
        setHeros(normalize(initialHeros));
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }

      setIsLoading(false);
    },
    [setHeros, setIsLoading],
  );

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    fetchInitialHeros(signal);

    return () => abortController.abort();
  }, [fetchInitialHeros]);

  return { heros, isLoading };
};

export default useInitialHeros;
