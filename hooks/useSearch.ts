import create from 'zustand';
import shallow from 'zustand/shallow';
import { HeroAPI } from '../types/api.types';
import { searchSuperHeroByName } from '../utils/services.client';

export type SearchStore = {
  isSearching: boolean;
  searchResult?: HeroAPI | null;
  clearSearchResult: () => void;
  search: (query: string, signal: AbortSignal) => void;
};

export const searchHero = async (query: string, signal: AbortSignal) => {
  const formattedQuery = query.replace(/\s+/, '-');
  const { results } = await searchSuperHeroByName(formattedQuery, signal);
  return results[0];
};

export const useSearchStore = create<SearchStore>((set) => ({
  isSearching: false,
  clearSearchResult: () =>
    set((state) => ({ ...state, searchResult: undefined })),
  search: async (query, signal) => {
    set((state) => ({ ...state, isSearching: true }));
    let result: HeroAPI | null = null;
    try {
      result = await searchHero(query, signal);
    } catch (err) {
      // eslint-disable-next-line no-console
      console.error(err);
    }
    set((state) => ({ ...state, isSearching: false, searchResult: result }));
  },
}));

const useSearch = (): SearchStore =>
  useSearchStore((state) => ({ ...state }), shallow);

export default useSearch;
