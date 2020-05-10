import React, { FC } from 'react';
import { HeroAPI } from '~app/types/response';
import HeroCard from '~app/components/HeroCard';
import styles from './Grid.module.css';

interface GridProps {
  heros: HeroAPI[];
}

const Grid: FC<GridProps> = ({ heros }) => {
  return (
    <div className={styles.grid}>
      {heros.length > 0 ? (
        heros.map(({ id, name, slug, images: { sm } }) => (
          <div key={id} className={styles['grid-item']}>
            <HeroCard heroImage={sm} heroName={name} heroSlug={slug} />
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
