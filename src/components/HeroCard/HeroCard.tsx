import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './HeroCard.module.css';

interface HeroCardProps {
  id: number;
  heroImage: string;
  heroName: string;
  onImageLoad?: () => void;
  hover?: boolean;
}

const HeroCard: FC<HeroCardProps> = ({ id, heroImage, heroName, onImageLoad, hover = false }) => {
  const classes = classNames(styles.card, { [styles['card-hover']]: hover });

  return (
    <Link to={`/${id}`} className={classes}>
      <img className={styles['card-image']} src={heroImage} alt={heroName} onLoad={onImageLoad} />
      <p className={styles['card-caption']}>{heroName}</p>
    </Link>
  );
};

export default HeroCard;
