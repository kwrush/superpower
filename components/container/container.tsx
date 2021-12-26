import { FC, ReactNode } from 'react';
import styles from './styles.module.css';

interface ContainerProps {
  children?: ReactNode;
}

const Container: FC<ContainerProps> = ({ children }) => {
  return <div className={styles.container}>{children}</div>;
};

export default Container;
