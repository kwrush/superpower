import Link from 'next/link';
import Avatar from 'components/avatar';
import { Hero } from 'types/app.types';
import styles from './styles.module.css';

interface SearchResultsProps {
  results: Hero[];
  addToBattle: (result: Hero) => void;
  checkProfile: (result: Hero) => void;
}

export default function SearchResults({
  results,
  addToBattle,
  checkProfile,
}: SearchResultsProps) {
  return (
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
}
