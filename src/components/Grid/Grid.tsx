import React, { FC } from 'react';
import HeroCard from '~app/components/HeroCard';
import styles from './Grid.module.css';
import { HeroEntity } from '~app/types/app';

interface GridProps {
  heros?: HeroEntity;
}

const Grid: FC<GridProps> = ({ heros }) => {
  const herosEntities = heros ? Object.values(heros) : [];
  return (
    <div className={styles.grid}>
      {herosEntities.length > 0 ? (
        herosEntities.map(({ id, name, images: { sm } }) => (
          <div key={id} className={styles['grid-item']}>
            <HeroCard heroImage={sm} heroName={name} id={id} hover />
          </div>
        ))
      ) : (
        <p className={styles['no-result']}>
          <span className={styles.emoji} role="img" aria-label="Supervillain">
            🦹
          </span>
          No heros found
        </p>
      )}
    </div>
  );
};

export default Grid;
