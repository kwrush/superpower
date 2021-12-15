import React, { FC, useCallback, KeyboardEvent, ChangeEvent } from 'react';
import styles from './SearchInput.module.css';
import useAbortSignal from '../../hooks/useAbortSignal';

const ENTER_KEY_CODE = 13;

interface SearchInputProps {
  onSearch: (query: string, signal: AbortSignal) => void;
  onClear: () => void;
}

const SearchInput: FC<SearchInputProps> = ({ onSearch, onClear }) => {
  const abortSignal = useAbortSignal();

  const handleKeyUp = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.keyCode === ENTER_KEY_CODE) {
        onSearch(e.currentTarget.value, abortSignal);
      }
    },
    [onSearch, abortSignal],
  );

  const handleOnChange = useCallback(
    (e: ChangeEvent<HTMLInputElement>) => {
      if (!e.currentTarget.value) {
        onClear();
      }
    },
    [onClear],
  );

  return (
    <div className={styles['input-wrapper']}>
      <span className={styles['input-addon']} role="img" aria-label="Muscle">
        💪
      </span>
      <input
        className={styles.input}
        placeholder="Search for heros"
        onKeyUp={handleKeyUp}
        onChange={handleOnChange}
      />
    </div>
  );
};

export default SearchInput;
