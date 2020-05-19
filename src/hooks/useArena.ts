import { useEffect, useState, useCallback } from 'react';
import { getInitialHeros } from '~app/lib/getInitialHeros';
import { HeroAPI } from '~app/types/response';

const useArena = () => {
  const [arenaPlayers, setArenaPlayers] = useState<HeroAPI[]>();
  const [isLoading, setIsLoading] = useState(true);

  const initiatePlayers = useCallback(
    async (signal: AbortSignal) => {
      try {
        const initialHeros = await getInitialHeros(signal);
        setArenaPlayers(initialHeros);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }

      setIsLoading(false);
    },
    [setArenaPlayers, setIsLoading],
  );

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    initiatePlayers(signal);

    return () => abortController.abort();
  }, [initiatePlayers]);

  return { arenaPlayers, setArenaPlayers, isLoading };
};

export default useArena;
