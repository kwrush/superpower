import React, { FC } from 'react';
import styles from './Avatar.module.css';

interface AvatarProps {
  src: string;
  alt?: string;
}

const Avatar: FC<AvatarProps> = ({ src, alt = '' }) => (
  <figure className={styles.avatar}>
    <img className={styles.image} src={src} alt={alt} />
  </figure>
);

export default Avatar;
