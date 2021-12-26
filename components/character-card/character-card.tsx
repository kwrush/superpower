import Link from 'next/link';
import { FC } from 'react';
import { Alignment } from 'types/api.types';
import Avatar from 'components/avatar';

interface CharacterCardProps {
  id: string;
  name: string;
  alignment: Alignment;
  image: string;
}

const CharacterCard: FC<CharacterCardProps> = ({ id, name, image }) => {
  return (
    <Link href={`/profile/${id}`} passHref>
      <a>
        <Avatar src={image} alt={name} size="l" />
        <p>{name}</p>
      </a>
    </Link>
  );
};

export default CharacterCard;
