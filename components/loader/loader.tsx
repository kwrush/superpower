import { FC } from 'react';
import Image from 'next/image';
import supermanLogo from 'public/superman-logo.svg';
import styles from './styles.module.css';

const Loader: FC = () => (
  <div className={styles.loader}>
    <Image
      className={styles.logo}
      src={supermanLogo}
      alt="logo"
      width="100%"
      height="100%"
    />
  </div>
);

export default Loader;
