import React, { FC } from 'react';
import classNames from 'classnames';
import { Alignment } from '../../types/response';
import styles from './CharacterCard.module.css';
import Link from 'next/link';

interface CharacterCardProps {
  id: number;
  name: string;
  image: string;
  alignment: Alignment;
}

const CharacterCard: FC<CharacterCardProps> = ({
  id,
  name,
  image,
  alignment = 'neutral',
}) => {
  const cardClasses = classNames(styles[`card-${alignment}`], styles.card);
  const slug = `${id}-${name.toLowerCase().replace(/\s+/, '-')}`;

  return (
    <Link href={`/profile/${slug}`}>
      <a className={cardClasses}>
        <img className={styles['card-image']} src={image} alt={name} />
        <p className={styles['card-caption']}>{name}</p>
      </a>
    </Link>
  );
};

export default CharacterCard;
