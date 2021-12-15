import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './Avatar.module.css';

interface AvatarProps {
  size?: 's' | 'm' | 'l';
  src: string;
  alt?: string;
}

const Avatar: FC<AvatarProps> = ({ size = 'm', src, alt = '' }) => {
  const classes = classNames(styles.avatar, styles[`avatar-${size}`]);
  return (
    <figure className={classes}>
      <img className={styles.image} src={src} alt={alt} />
    </figure>
  );
};

export default Avatar;
