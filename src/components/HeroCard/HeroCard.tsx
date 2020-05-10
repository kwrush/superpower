import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import styles from './HeroCard.module.css';

interface HeroCardProps {
  heroSlug: string;
  heroImage: string;
  heroName: string;
  onImageLoad?: () => void;
}

const HeroCard: FC<HeroCardProps> = ({ heroSlug, heroImage, heroName, onImageLoad }) => {
  return (
    <Link to={`/${heroSlug}`} className={styles.card}>
      <img className={styles['card-image']} src={heroImage} alt={heroName} onLoad={onImageLoad} />
      <p className={styles['card-caption']}>{heroName}</p>
    </Link>
  );
};

export default HeroCard;
