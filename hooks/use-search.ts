import { SearchNameAPI } from 'types/api.types';
import { Hero } from 'types/app.types';
import request from 'utils/request';
import create from 'zustand';

interface SearchStore {
  results?: Hero[];
  loading: boolean;
  setResults: (results: Hero[]) => void;
  search: (name: string) => void;
}

const useSearch = create<SearchStore>((set, get) => ({
  loading: false,
  setResults: (results) => ({ results }),
  search: async (name: string) => {
    set({ loading: true });
    try {
      const { results } = await request<SearchNameAPI>(
        `/api/search?name=${name}`,
      );
      set({ results, loading: false });
    } catch {
      set({ loading: false });
    }
  },
}));

export default useSearch;
