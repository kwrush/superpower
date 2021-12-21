import Image from 'next/image';
import Link from 'next/link';
import { FC } from 'react';
import { Alignment } from 'types/api.types';

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
        <Image src={image} alt={name} />
        <p>{name}</p>
      </a>
    </Link>
  );
};

export default CharacterCard;
