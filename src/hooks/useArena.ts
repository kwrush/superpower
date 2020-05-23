import { useEffect, useState, useCallback, useContext } from 'react';
import getHeros from '~app/lib/getHeros';
import randomHeros from '~app/lib/randomHeros';
import { HeroContext } from '~app/containers/HeroProvider';

const useArena = (playerIds?: number[]) => {
  const { arenaPlayers, setArenaPlayers } = useContext(HeroContext);
  const [isLoading, setIsLoading] = useState(true);

  const initiatePlayers = useCallback(
    async (signal: AbortSignal) => {
      // The API is not reliable, let's use the old data in memory when it's possible
      if (!arenaPlayers && setArenaPlayers) {
        try {
          const playersToFetch = playerIds || randomHeros(2);
          const initialHeros = await getHeros(playersToFetch, signal);
          setArenaPlayers(initialHeros);
        } catch (err) {
          // eslint-disable-next-line no-console
          console.error(err);
        }
      }

      setIsLoading(false);
    },
    [arenaPlayers, setArenaPlayers, setIsLoading, playerIds],
  );

  useEffect(() => {
    const abortController = new AbortController();
    const { signal } = abortController;

    initiatePlayers(signal);

    return () => abortController.abort();
  }, [initiatePlayers]);

  return { isLoading };
};

export default useArena;
