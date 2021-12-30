import Link from 'next/link';
import Avatar from 'components/avatar';
import { Alignment } from 'types/api.types';
import styles from './styles.module.css';

interface CharacterCardProps {
  id: string;
  name: string;
  alignment: Alignment;
  image: string;
}

export default function CharacterCard({ id, name, image }: CharacterCardProps) {
  return (
    <Link href={`/profile/${id}`} passHref>
      <a className={styles.card}>
        <Avatar src={image} alt={name} size="l" />
        <p>{name}</p>
      </a>
    </Link>
  );
}
