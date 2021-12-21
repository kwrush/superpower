import create from 'zustand';
import shallow from 'zustand/shallow';
import { getRandomHeros } from '../utils/services.client';
import { HeroAPI } from '../types/api.types';

export type FetchArenaPlayersPayload = {
  playerNames?: string[];
  signal: AbortSignal;
};

export type ArenaStore = {
  isFetching: boolean;
  arenaPlayers?: HeroAPI[];
  addArenaPlayer: (player: HeroAPI) => void;
  initArena: (payload: FetchArenaPlayersPayload) => void;
};

export const useArenaStore = create<ArenaStore>((set, get) => ({
  isFetching: true,
  addArenaPlayer: (player) => {
    const { arenaPlayers } = get();

    set((state) => {
      if (!arenaPlayers || arenaPlayers.find((p) => p.id === player.id)) {
        return state;
      }
      const newPlayers = arenaPlayers.slice(-1).concat(player);
      return { ...state, arenaPlayers: newPlayers };
    });
  },
  initArena: async ({ playerNames, signal }) => {
    const { arenaPlayers } = get();
    if (!arenaPlayers) {
      set((state) => ({ ...state, isFetching: true }));
      try {
        const players = await getRandomHeros(signal);
        set((state) => ({
          ...state,
          arenaPlayers: players,
          isFetching: false,
        }));
      } catch (err) {
        set((state) => ({ ...state, isFetching: false }));
        // eslint-disable-next-line no-console
        console.error(err);
      }
    }
  },
}));

const useArena = (): ArenaStore =>
  useArenaStore((state) => ({ ...state }), shallow);

export default useArena;
