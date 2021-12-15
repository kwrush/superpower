import React, { FC } from 'react';
import HeroPowersProfile from '../../components/HeroPowersProfile';
import NoResult from '../../components/NoResult';
import useHeroProfile from '../../hooks/useHeroProfile';
import Loader from '../../components/Loader';
import HeroDetails from '../../components/HeroDetails';
import Container from '../../components/Container';
import styles from '../../styles/Profile.module.css';
import Head from 'next/head';
import { useRouter } from 'next/router';

const Profile: FC = () => {
  const {
    query: { id },
  } = useRouter();

  const name = (id as string).split('-').slice(1).join('');
  const { hero, isFetching } = useHeroProfile(name);

  return (
    <Container>
      <Head>
        <title>{`Profile-${hero?.name}`}</title>
      </Head>
      {isFetching && <Loader />}
      {!isFetching && !hero && <NoResult />}
      {!isFetching && hero && (
        <>
          <header className={styles.header}>
            <h1>{hero.name}</h1>
          </header>
          <HeroPowersProfile
            name={hero.name}
            avatar={hero.images.sm}
            powers={hero.powerstats}
          />
          <HeroDetails
            appearance={hero.appearance}
            biography={hero.biography}
          />
        </>
      )}
    </Container>
  );
};

export default Profile;
