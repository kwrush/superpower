import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import styles from './HeroCard.module.css';

interface HeroCardProps {
  heroSlug: string;
  heroImage: string;
  heroName: string;
  onImageLoad?: () => void;
  hover?: boolean;
}

const HeroCard: FC<HeroCardProps> = ({
  heroSlug,
  heroImage,
  heroName,
  onImageLoad,
  hover = false,
}) => {
  const classes = classNames(styles.card, { [styles['card-hover']]: hover });

  return (
    <Link to={`/${heroSlug}`} className={classes}>
      <img className={styles['card-image']} src={heroImage} alt={heroName} onLoad={onImageLoad} />
      <p className={styles['card-caption']}>{heroName}</p>
    </Link>
  );
};

export default HeroCard;
