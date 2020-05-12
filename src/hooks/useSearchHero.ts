import { useState, useCallback } from 'react';
import { searchSuperHeroByName } from '~app/lib/api';
import { HeroEntity } from '~app/types/app';
import normalize from '~app/lib/normalize';

const useSearchHero = () => {
  const [searchResult, setSearchResult] = useState<HeroEntity>();
  const [isSearching, setIsSearching] = useState(false);

  const searchHero = useCallback(
    async (query: string) => {
      setIsSearching(true);
      try {
        const formattedQuery = query.replace(/\s+/, '-');
        const hero = await searchSuperHeroByName(formattedQuery);
        if (typeof hero === 'string') {
          setSearchResult({});
        } else {
          setSearchResult(normalize([hero]));
        }
      } catch (err) {
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
