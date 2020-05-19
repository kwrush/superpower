import React, { FC } from 'react';
import { Link } from 'react-router-dom';
import classNames from 'classnames';
import { Alignment } from '~app/types/response';
import styles from './CharacterCard.module.css';

interface CharacterCardProps {
  id: number;
  name: string;
  image: string;
  alignment: Alignment;
}

const CharacterCard: FC<CharacterCardProps> = ({ id, name, image, alignment = 'neutral' }) => {
  const cardClasses = classNames(styles[`card-${alignment}`], styles.card);
  const slug = `${id}-${name.toLowerCase().replace(/\s+/, '-')}`;

  return (
    <Link to={`/${slug}`} className={cardClasses}>
      <img className={styles['card-image']} src={image} alt={name} />
      <p className={styles['card-caption']}>{name}</p>
    </Link>
  );
};

export default CharacterCard;
