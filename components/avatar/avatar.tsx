import React, { FC } from 'react';
import classNames from 'classnames';
import styles from './styles.module.css';
import Image from 'next/image';

interface AvatarProps {
  size?: 's' | 'm' | 'l';
  src: string;
  alt?: string;
}

const Avatar: FC<AvatarProps> = ({ size = 'm', src, alt = '' }) => {
  const classes = classNames(styles.avatar, styles[`avatar-${size}`]);
  return (
    <figure className={classes}>
      <Image
        className={styles.image}
        src={src}
        alt={alt}
        width="100%"
        height="100%"
      />
    </figure>
  );
};

export default Avatar;
