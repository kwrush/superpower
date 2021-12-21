import React, { FC } from 'react';
import classNames from 'classnames';
import { Alignment } from '../../types/api.types';
import styles from './CharacterCard.module.css';
import Link from 'next/link';
import Image from 'next/image';

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
        <Image className={styles['card-image']} src={image} alt={name} />
        <p className={styles['card-caption']}>{name}</p>
      </a>
    </Link>
  );
};

export default CharacterCard;
