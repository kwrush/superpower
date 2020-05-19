import React, { FC, useCallback, useContext } from 'react';
import CharacterCard from '../CharacterCard';
import { HeroAPI } from '~app/types/response';
import NoResult from '../NoResult';
import styles from './SearchResult.module.css';
import { HeroContext } from '~app/containers/HeroProvider';

interface SearchResultProps {
  searchResult: HeroAPI | null;
  addPlayer?: (player: HeroAPI) => void;
}

const SearchResult: FC<SearchResultProps> = ({ searchResult, addPlayer }) => {
  const { clearSearchResult } = useContext(HeroContext);
  const onAddToArena = useCallback(() => {
    if (searchResult && addPlayer) {
      addPlayer(searchResult);
      if (clearSearchResult) clearSearchResult();
    }
  }, [addPlayer, searchResult, clearSearchResult]);

  return searchResult ? (
    <div className={styles.result}>
      <CharacterCard
        id={searchResult.id}
        name={searchResult.name}
        alignment={searchResult.biography.alignment}
        image={searchResult.images.sm}
      />
      <button className={styles.button} type="button" onClick={onAddToArena}>
        Add to arena
      </button>
    </div>
  ) : (
    <NoResult />
  );
};

export default SearchResult;
