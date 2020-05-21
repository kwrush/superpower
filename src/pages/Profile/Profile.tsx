import React, { FC } from 'react';
import { useParams } from 'react-router';
import HeroPowersProfile from '~app/components/HeroPowersProfile';
import NoResult from '~app/components/NoResult';
import useFetchHero from '~app/hooks/useFetchHero';
import Loader from '~app/components/Loader';
import HeroDetails from '~app/components/HeroDetails';
import Container from '~app/components/Container';
import styles from './Profile.module.css';

const Profile: FC = () => {
  const { slug } = useParams();
  const id = parseInt((slug as string).split('-')[0], 10);
  const { hero, isLoading } = useFetchHero(id);

  return (
    <Container>
      {isLoading && <Loader />}
      {!isLoading && !hero && <NoResult />}
      {!isLoading && hero && (
        <>
          <header className={styles.header}>
            <h1>{hero.name}</h1>
          </header>
          <HeroPowersProfile name={hero.name} avatar={hero.images.sm} powers={hero.powerstats} />
          <HeroDetails appearance={hero.appearance} biography={hero.biography} />
        </>
      )}
    </Container>
  );
};

export default Profile;
