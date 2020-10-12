import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import { HeroAPI } from '~app/types/response';
import CharacterCard from '../CharacterCard';
import styles from './ArenaCard.module.css';

interface ArenaCardProps {
  player: HeroAPI;
  opponent: HeroAPI;
}

const ArenaCard: FC<ArenaCardProps> = ({ player, opponent }) => {
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
        <li className={styles.player}>
          <CharacterCard
            id={player.id}
            name={player.name}
            image={player.images.sm}
            alignment={player.biography.alignment}
          />
        </li>
        <li className={styles.player}>
          <CharacterCard
            id={opponent.id}
            name={opponent.name}
            image={opponent.images.sm}
            alignment={opponent.biography.alignment}
          />
        </li>
      </ul>
      <Link to={link} className={styles.link}>
        Compare
      </Link>
    </div>
  );
};

export default ArenaCard;
