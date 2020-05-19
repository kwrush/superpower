import { useState, useCallback } from 'react';
import { searchSuperHeroByName } from '~app/lib/api';
import { HeroAPI } from '~app/types/response';

const useSearchHero = () => {
  const [searchResult, setSearchResult] = useState<HeroAPI | null>();
  const [isSearching, setIsSearching] = useState(false);

  const searchHero = useCallback(
    async (query: string) => {
      setIsSearching(true);
      try {
        const formattedQuery = query.replace(/\s+/, '-');
        const hero = await searchSuperHeroByName(formattedQuery);
        setSearchResult(hero);
      } catch (err) {
        setSearchResult(null);
        // eslint-disable-next-line no-console
        console.error(err);
      }

      setIsSearching(false);
    },
    [setSearchResult],
  );

  return { isSearching, searchResult, searchHero, setSearchResult };
};

export default useSearchHero;
