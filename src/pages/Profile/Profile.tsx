import React, { FC } from 'react';
import { useParams } from 'react-router';
import HeroProfile from '~app/components/HeroProfile';
import Grid from '~app/components/Grid';
import useFetchHero from '~app/hooks/useFetchHero';
import Loader from '~app/components/Loader';
import HeroDetails from '~app/components/HeroDetails';
import Container from '~app/components/Container';
import styles from './Profile.module.css';

const Profile: FC = () => {
  const { id } = useParams();
  const { hero, isLoading } = useFetchHero(id);

  return (
    <Container>
      {isLoading && <Loader />}
      {!isLoading && !hero && <Grid heros={{}} />}
      {!isLoading && hero && (
        <>
          <header className={styles.header}>
            <h1>{hero.name}</h1>
          </header>
          <HeroProfile name={hero.name} avatar={hero.images.sm} powers={hero.powerstats} />
          <HeroDetails appearance={hero.appearance} biography={hero.biography} />
        </>
      )}
    </Container>
  );
};

export default Profile;
