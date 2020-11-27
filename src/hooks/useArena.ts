import create from 'zustand';
import shallow from 'zustand/shallow';
import { HeroAPI } from '~app/types/response';
import getHeros from '~app/lib/getHeros';
import randomHeros from '~app/lib/randomHeros';

export type FetchArenaPlayersPayload = {
  playerIds?: number[];
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
  initArena: async ({ playerIds, signal }) => {
    const { arenaPlayers } = get();
    if (!arenaPlayers) {
      set((state) => ({ ...state, isFetching: true }));
      try {
        const players = await getHeros(playerIds ?? randomHeros(2), signal);
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
