import create from 'zustand';
import { HeroAPI } from '~app/types/response';

export type HeroStore = {
  arenaPlayers?: HeroAPI[];
  searchResult?: HeroAPI | null;
  clearSearchResult: () => void;
  setArenaPlayers: (players?: HeroAPI[]) => void;
  addArenaPlayer: (player: HeroAPI) => void;
  setSearchResult: (result: HeroAPI | null | undefined) => void;
};

export const selectArenaPlayers = (state: HeroStore) => state.arenaPlayers;
export const selectSearchResult = (state: HeroStore) => state.searchResult;

export const selectArenaState = (state: HeroStore) => ({
  arenaPlayers: selectArenaPlayers(state),
  setArenaPlayers: state.setArenaPlayers,
});

export const selectSearchState = (state: HeroStore) => ({
  searchResult: selectSearchResult(state),
  setSearchResult: state.setSearchResult,
});

const useHeroStore = create<HeroStore>((set) => ({
  clearSearchResult: () =>
    set((state) => ({ ...state, searchResult: undefined })),
  setSearchResult: (result) =>
    set((state) => ({ ...state, searchResult: result })),
  setArenaPlayers: (players) =>
    set((state) => ({ ...state, arenaPlayers: players })),
  addArenaPlayer: (player) =>
    set((state) => {
      const { arenaPlayers } = state;
      if (!arenaPlayers || arenaPlayers.find((p) => p.id === player.id)) {
        return state;
      }
      const newPlayers = [...arenaPlayers.slice(-1), player];
      return { ...state, arenaPlayers: newPlayers };
    }),
}));

export default useHeroStore;
