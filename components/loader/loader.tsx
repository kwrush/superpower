import Image from 'next/image';
import supermanLogo from 'public/superman-logo.svg';
import styles from './styles.module.css';

export default function Loader() {
  return (
    <div className={styles.loader}>
      <Image
        className={styles.logo}
        src={supermanLogo}
        alt="logo"
        width={64}
        height={64}
      />
    </div>
  );
}
