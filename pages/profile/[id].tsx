import { useEffect } from 'react';
import PowerSummary from '../../components/power-summary';
import ProfileSummary from '../../components/profile-summary';
import Container from '../../components/container';
import styles from '../../styles/Profile.module.css';
import Head from 'next/head';
import { Hero } from '../../types/app.types';
import useProfile from 'hooks/use-profile';
import { useRouter } from 'next/router';

export type Props = {
  data: Hero;
};

const Profile = () => {
  const router = useRouter();
  const { id } = router.query;
  const { profile, fetchProfile } = useProfile();

  useEffect(() => {
    const verifyProfile = async () => {
      if (profile) {
        await fetchProfile(id as string);
      }
    };

    verifyProfile();
  }, [profile, id, fetchProfile]);

  return (
    <Container>
      <Head>
        <title>{profile?.name}</title>
      </Head>
      <>
        <header className={styles.header}>
          <h1>{profile?.name}</h1>
        </header>
        {profile && (
          <>
            <PowerSummary
              name={profile.name}
              avatar={profile.image.url}
              powers={profile.powerstats}
            />
            <ProfileSummary
              appearance={profile.appearance}
              biography={profile.biography}
            />
          </>
        )}
      </>
    </Container>
  );
};

export default Profile;
