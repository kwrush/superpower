import React, { KeyboardEvent, useCallback, useState } from 'react';
import styles from './styles.module.css';

interface SearchboxProps {
  onSearch: (query: string) => void;
}

function Searchbox({ onSearch }: SearchboxProps) {
  const [value, setValue] = useState<string>('');

  const handleSubmit = useCallback(
    (e: KeyboardEvent<HTMLInputElement>) => {
      if (e.key === 'Enter' && !!e.currentTarget.value) {
        onSearch(e.currentTarget.value);
      }
    },
    [onSearch],
  );

  return (
    <div className={styles['input-container']}>
      <span role="img" aria-label="Muscle" className={styles['input-addon']}>
        💪
      </span>
      <input
        className={styles.input}
        type="text"
        placeholder="Search for heros"
        onChange={(e) => setValue(e.currentTarget.value)}
        onKeyPress={handleSubmit}
        value={value}
      />
    </div>
  );
}

export default React.memo(Searchbox);
