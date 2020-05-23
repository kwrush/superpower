import { useState, useCallback, useContext } from 'react';
import { searchSuperHeroByName } from '~app/lib/api';
import { HeroContext } from '~app/containers/HeroProvider';

const useSearchHero = () => {
  const { searchResult, setSearchResult } = useContext(HeroContext);
  const [isSearching, setIsSearching] = useState(false);

  const searchHero = useCallback(
    async (query: string) => {
      setIsSearching(true);
      let result = null;
      try {
        const formattedQuery = query.replace(/\s+/, '-');
        result = await searchSuperHeroByName(formattedQuery);
      } catch (err) {
        // eslint-disable-next-line no-console
        console.error(err);
      }

      if (setSearchResult) setSearchResult(result);
      setIsSearching(false);
    },
    [setSearchResult],
  );

  return { isSearching, searchResult, searchHero };
};

export default useSearchHero;
