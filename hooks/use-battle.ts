import create from 'zustand/react';
import { Hero } from 'types/app.types';

interface BattleStore {
  battle?: Hero[];
  setBattle: (battle: Hero[]) => void;
}

const useBattle = create<BattleStore>((set) => ({
  setBattle: (battle) => set({ battle }),
}));

export default useBattle;
