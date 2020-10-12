import React, {
  FC,
  createContext,
  ReactNode,
  useCallback,
  useState,
} from 'react';
import { HeroContextType } from '~app/types/app';
import { HeroAPI } from '~app/types/response';

interface HeroProviderProps {
  children: ReactNode;
}

export const HeroContext = createContext<HeroContextType>({});

const HeroProvider: FC<HeroProviderProps> = ({ children }) => {
  const [arenaPlayers, setArenaPlayers] = useState<HeroAPI[] | undefined>();
  const [searchResult, setSearchResult] = useState<HeroAPI | null>();

  const clearSearchResult = useCallback(() => {
    setSearchResult(undefined);
  }, [setSearchResult]);

  const addArenaPlayer = useCallback(
    (player: HeroAPI) => {
      if (
        setArenaPlayers &&
        arenaPlayers &&
        arenaPlayers.findIndex(
          (existedPlayer) => existedPlayer.id === player.id,
        ) < 0
      ) {
        const newPlayers = [...arenaPlayers, player].slice(-2);
        setArenaPlayers(newPlayers);
      }
    },
    [arenaPlayers, setArenaPlayers],
  );

  return (
    <HeroContext.Provider
      value={{
        arenaPlayers,
        searchResult,
        clearSearchResult,
        setArenaPlayers,
        addArenaPlayer,
        setSearchResult,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export default HeroProvider;
