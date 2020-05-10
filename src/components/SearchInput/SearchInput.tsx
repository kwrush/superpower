import React, { FC, useCallback, KeyboardEvent } from 'react';
import styles from './SearchInput.module.css';

const ENTER_KEY_CODE = 13;

interface SearchInputProps {
  onSearch: (query: string) => void;
}

const SearchInput: FC<SearchInputProps> = ({ onSearch }) => {
  const handleKeyUp = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === ENTER_KEY_CODE) {
        onSearch(e.currentTarget.value);
      }
    },
    [onSearch],
  );

  return (
    <div className={styles['input-wrapper']}>
      <span className={styles['input-addon']} role="img" aria-label="Muscle">
        💪
      </span>
      <input className={styles.input} placeholder="Search for heros" onKeyUp={handleKeyUp} />
    </div>
  );
};

export default SearchInput;
