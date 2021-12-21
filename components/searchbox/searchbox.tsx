import { FC, KeyboardEvent, useCallback, useState } from 'react';
import styles from './styles.module.css';

interface SearchboxProps {
  onSearch: (query: string) => void;
}

const Searchbox: FC<SearchboxProps> = ({ onSearch }) => {
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
};

export default Searchbox;
