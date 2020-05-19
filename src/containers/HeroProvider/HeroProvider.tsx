import React, { FC, createContext, ReactNode, useCallback } from 'react';
import useArena from '~app/hooks/useArena';
import useSearchHero from '~app/hooks/useSearchHero';
import { HeroContextType } from '~app/types/app';

interface HeroProviderProps {
  children: ReactNode;
}

const initialState: HeroContextType = {
  isLoading: false,
  isSearching: false,
};

export const HeroContext = createContext(initialState);

const HeroProvider: FC<HeroProviderProps> = ({ children }) => {
  const { arenaPlayers, isLoading, setArenaPlayers } = useArena();
  const { isSearching, searchResult, setSearchResult, searchHero } = useSearchHero();

  const clearSearchResult = useCallback(() => {
    setSearchResult(undefined);
  }, [setSearchResult]);

  return (
    <HeroContext.Provider
      value={{
        arenaPlayers,
        isLoading,
        searchResult,
        clearSearchResult,
        isSearching,
        searchHero,
        setArenaPlayers,
      }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export default HeroProvider;
