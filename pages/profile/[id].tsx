import { useEffect } from 'react';
import Head from 'next/head';
import { useRouter } from 'next/router';
import Container from 'components/container';
import Header from 'components/header';
import PowerSummary from 'components/power-summary';
import ProfileSummary from 'components/profile-summary';
import useProfile from 'hooks/use-profile';
import styles from 'styles/profile.module.css';
import { Hero } from 'types/app.types';

export type Props = {
  data: Hero;
};

export default function Profile({ data }: Props) {
  const router = useRouter();
  const { id } = router.query;
  const { profile, fetchProfile } = useProfile();

  useEffect(() => {
    const verifyProfile = async () => {
      if (profile == null && id != null) {
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
        <Header />
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
}
