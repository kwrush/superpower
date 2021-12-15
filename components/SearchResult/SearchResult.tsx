import React, { FC, useCallback } from 'react';
import CharacterCard from '../CharacterCard';
import { HeroAPI } from '../../types/response';
import styles from './SearchResult.module.css';

interface SearchResultProps {
  searchResult: HeroAPI;
  addPlayer: (player: HeroAPI) => void;
  onClear: () => void;
}

const SearchResult: FC<SearchResultProps> = ({
  searchResult,
  addPlayer,
  onClear,
}) => {
  const onAddToArena = useCallback(() => {
    if (searchResult) {
      addPlayer(searchResult);
      onClear();
    }
  }, [addPlayer, searchResult, onClear]);

  return (
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
  );
};

export default SearchResult;
