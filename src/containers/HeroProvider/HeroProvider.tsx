import React, { FC, createContext, ReactNode, useCallback } from 'react';
import useInitialHeros from '~app/hooks/useInitialHeros';
import { HeroContextType } from '~app/types/app';
import useSearchHero from '~app/hooks/useSearchHero';

interface HeroProviderProps {
  children: ReactNode;
}

const initialState: HeroContextType = {
  isLoading: false,
  isSearching: false,
};

export const HeroContext = createContext(initialState);

const HeroProvider: FC<HeroProviderProps> = ({ children }) => {
  const { heros, isLoading } = useInitialHeros();
  const { isSearching, searchResult, setSearchResult, searchHero } = useSearchHero();

  const clearSearchResult = useCallback(() => {
    setSearchResult(undefined);
  }, [setSearchResult]);

  return (
    <HeroContext.Provider
      value={{ heros, isLoading, searchResult, clearSearchResult, isSearching, searchHero }}
    >
      {children}
    </HeroContext.Provider>
  );
};

export default HeroProvider;
