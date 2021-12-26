import create from 'zustand';
import { Hero } from 'types/app.types';
import request from 'utils/request';
import { HeroAPI } from 'types/api.types';

interface BattleStore {
  battle?: Hero[];
  loading: boolean;
  setBattle: (battle: Hero[]) => void;
  addToBattle: (hero: Hero) => void;
  fetchBattle: (ids: string[]) => void;
  createBattle: () => void;
}

const useBattle = create<BattleStore>((set, get) => ({
  loading: false,
  setBattle: (battle) => set({ battle }),
  addToBattle: (hero) => {
    const { battle } = get();
    if (battle) {
      set({ battle: [battle[battle.length - 1], hero] });
    }
  },
  fetchBattle: async (ids: string[]) => {
    set({ loading: true });
    try {
      const [player, rival] = await request<HeroAPI[]>(
        `/api/battle?ids=${ids}`,
      );
      set({ battle: [player, rival], loading: false });
    } catch {
      set({ loading: false });
    }
  },
  createBattle: async () => {
    set({ loading: true });
    try {
      const [player, rival] = await request<HeroAPI[]>(`/api/battle/random`);
      set({ battle: [player, rival], loading: false });
    } catch {
      set({ loading: false });
    }
  },
}));

export default useBattle;
