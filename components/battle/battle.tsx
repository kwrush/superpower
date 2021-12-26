import { FC } from 'react';
import Link from 'next/link';
import { Hero } from 'types/app.types';
import CharacterCard from 'components/character-card';
import styles from './styles.module.css';

interface BattleProps {
  battle: Hero[];
  refresh: () => void;
}

const Battle: FC<BattleProps> = ({ battle, refresh }) => {
  return (
    <section className={styles.battle}>
      <header className={styles.header}>
        <h3 className={styles.title}>
          <span role="img" aria-label="crossed-swords">
            ⚔️
          </span>
          Battle
        </h3>
        <div role="button" onClick={refresh} className={styles.button}>
          Refresh
        </div>
      </header>
      <ul className={styles.players}>
        {battle.map(
          ({ id, name, image: { url }, biography: { alignment } }) => (
            <li key={id} className={styles.player}>
              <CharacterCard
                id={id}
                name={name}
                image={url}
                alignment={alignment}
              />
            </li>
          ),
        )}
      </ul>
      <Link href={`/battle/${battle.map(({ id }) => id).join('v')}`}>
        <a className={styles.button}>Battle</a>
      </Link>
    </section>
  );
};

export default Battle;
