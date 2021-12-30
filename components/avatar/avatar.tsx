import React, { FC } from 'react';
import Image from 'next/image';
import classNames from 'classnames';
import styles from './styles.module.css';

interface AvatarProps {
  size?: 's' | 'm' | 'l';
  src: string;
  alt?: string;
}

export default function Avatar({ size = 'm', src, alt = '' }: AvatarProps) {
  const classes = classNames(styles.avatar, styles[`avatar-${size}`]);
  return (
    <div className={classes}>
      <Image
        className={styles.image}
        src={src}
        alt={alt}
        width={240}
        height={320}
      />
    </div>
  );
}
