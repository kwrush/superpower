import { HeroAPI } from './response';

export type HeroEntity = Readonly<{
  [id: number]: HeroAPI;
}>;

export interface HeroContextType {
  isLoading: boolean;
  isSearching: boolean;
  arenaPlayers?: HeroAPI[];
  searchResult?: HeroAPI | null;
  clearSearchResult?: () => void;
  setArenaPlayers?: (players: HeroAPI[]) => void;
  searchHero?: (query: string) => void;
}
