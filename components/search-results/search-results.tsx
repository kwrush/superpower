import { FC, MouseEvent } from 'react';
import { Hero } from 'types/app.types';
import Avatar from 'components/avatar';
import styles from './styles.module.css';
import Link from 'next/link';

interface SearchResultsProps {
  results: Hero[];
  addToBattle: (result: Hero) => void;
  checkProfile: (result: Hero) => void;
}

const SearchResults: FC<SearchResultsProps> = ({
  results,
  addToBattle,
  checkProfile,
}) => (
  <div className={styles.result}>
    <ul className={styles['result-list']}>
      {results.map((result) => (
        <li key={result.id} className={styles['result-item']}>
          <Link href={`/profile/${result.id}`} passHref>
            <a
              className={styles['result-item-link']}
              onClick={(e) => {
                checkProfile(result);
              }}
            >
              <Avatar src={result.image.url} alt={result.name} size="s" />
              <span>{result.name}</span>
            </a>
          </Link>
          <div
            className={styles.button}
            role="button"
            onClick={() => addToBattle(result)}
          >
            Add to battle
          </div>
        </li>
      ))}
    </ul>
  </div>
);

export default SearchResults;
