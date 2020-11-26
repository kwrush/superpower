import { useEffect, useState } from 'react';
import create from 'zustand';
import shallow from 'zustand/shallow';
import AbortController from 'abort-controller';
import { HeroAPI } from '~app/types/response';
import { searchSuperHeroByName } from '~app/lib/api';

export type SearchStore = {
  isSearching: boolean;
  searchResult?: HeroAPI | null;
  clearSearchResult: () => void;
  search: (query: string, signal: AbortSignal) => void;
};

export const searchHero = async (query: string, signal: AbortSignal) => {
  let result = null;
  try {
    const formattedQuery = query.replace(/\s+/, '-');
    result = await searchSuperHeroByName(formattedQuery, signal);
  } catch (err) {
    // eslint-disable-next-line no-console
    console.error(err);
  }

  return result;
};

export const useSearchStore = create<SearchStore>((set) => ({
  isSearching: false,
  clearSearchResult: () =>
    set((state) => ({ ...state, searchResult: undefined })),
  search: async (query, signal) => {
    set((state) => ({ ...state, isSearching: true }));
    const result = await searchHero(query, signal);
    set((state) => ({ ...state, isSearching: false, searchResult: result }));
  },
}));

export const useAbortSearch = () => {
  const [abortController] = useState(new AbortController());
  useEffect(() => {
    return () => abortController.abort();
  }, [abortController]);

  return abortController.signal;
};

const useSearch = (): SearchStore =>
  useSearchStore(
    (state) => ({
      isSearching: state.isSearching,
      searchResult: state.searchResult,
      search: state.search,
      clearSearchResult: state.clearSearchResult,
    }),
    shallow,
  );

export default useSearch;
