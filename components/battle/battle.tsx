import { FC } from 'react';
import Link from 'next/link';
import CharacterCard from 'components/character-card';
import useProfile from 'hooks/use-profile';
import { Hero } from 'types/app.types';
import styles from './styles.module.css';

interface BattleProps {
  battle: Hero[];
  refresh: () => void;
}
export default function Battle({ battle, refresh }: BattleProps) {
  const { setProfile } = useProfile();
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
        {battle.map((profile) => (
          <li
            key={profile.id}
            className={styles.player}
            onClick={() => setProfile(profile)}
          >
            <CharacterCard
              id={profile.id}
              name={profile.name}
              image={profile.image.url}
              alignment={profile.biography.alignment}
            />
          </li>
        ))}
      </ul>
      <Link href={`/battle/${battle.map(({ id }) => id).join('v')}`}>
        <a className={styles.button}>Battle</a>
      </Link>
    </section>
  );
}
