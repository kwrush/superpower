import React, { FC } from 'react';
import supermanLogo from './superman-logo.svg';
import styles from './Loader.module.css';

const Loader: FC = () => (
  <div className={styles.loader}>
    <img className={styles.logo} src={supermanLogo} alt="logo" />
  </div>
);

export default Loader;
