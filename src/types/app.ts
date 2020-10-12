import { HeroAPI } from './response';

export type HeroEntity = Record<number, HeroAPI>;

export interface HeroContextType {
  arenaPlayers?: HeroAPI[];
  searchResult?: HeroAPI | null;
  clearSearchResult?: () => void;
  setArenaPlayers?: (players: HeroAPI[] | undefined) => void;
  addArenaPlayer?: (player: HeroAPI) => void;
  setSearchResult?: (result: HeroAPI | null | undefined) => void;
}
