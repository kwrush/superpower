import Link from 'next/link';
import React, { FC } from 'react';
import { HeroAPI } from '../../types/response';
import CharacterCard from '../CharacterCard';
import styles from './ArenaCard.module.css';

interface ArenaCardProps {
  players: HeroAPI[];
}

const ArenaCard: FC<ArenaCardProps> = ({ players }) => {
  const [player, opponent] = players.slice(0, 2);
  const link = `/arena/${player.id}v${opponent.id}`;

  return (
    <div className={styles.arena}>
      <h3 className={styles.header}>
        <span role="img" aria-label="crossed-swords">
          ⚔️
        </span>
        Arena
      </h3>
      <ul className={styles.players}>
        {players.map(
          ({ id, name, images: { sm }, biography: { alignment } }) => (
            <li key={id} className={styles.player}>
              <CharacterCard
                id={id}
                name={name}
                image={sm}
                alignment={alignment}
              />
            </li>
          ),
        )}
      </ul>
      <Link href={link}>
        <a className={styles.link}>Compare</a>
      </Link>
    </div>
  );
};

export default ArenaCard;
