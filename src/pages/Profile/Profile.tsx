import React, { FC } from 'react';
import { useParams } from 'react-router';
import HeroProfile from '~app/components/HeroProfile';
import Grid from '~app/components/Grid';
import useFetchHero from '~app/hooks/useFetchHero';
import Loader from '~app/components/Loader';

const Profile: FC = () => {
  const { id } = useParams();
  const { hero, isLoading } = useFetchHero(id);

  return (
    <div>
      {isLoading && <Loader />}
      {!isLoading && !hero && <Grid heros={{}} />}
      {!isLoading && hero && (
        <HeroProfile name={hero.name} avatar={hero.images.sm} powers={hero.powerstats} />
      )}
    </div>
  );
};

export default Profile;
