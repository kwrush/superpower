import { HeroAPI } from './response';

export type HeroEntity = Readonly<{
  [id: string]: HeroAPI;
}>;

export interface HeroContextType {
  isLoading: boolean;
  isSearching: boolean;
  heros?: HeroEntity;
  searchResult?: HeroEntity;
  clearSearchResult?: () => void;
  searchHero?: (query: string) => void;
}
