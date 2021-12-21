import create from 'zustand';
import { Hero } from 'types/app.types';
import request from 'utils/request';

interface ProfileStore {
  profile?: Hero;
  setProfile: (profile: Hero) => void;
  fetchProfile: (id: string) => void;
}

const useProfile = create<ProfileStore>((set, get) => ({
  setProfile: (profile) => set({ profile }),
  fetchProfile: async (id: string) => {
    const { profile } = get();
    if (profile === undefined) {
      const data = await request<Hero>(`/api/profile/${id}`);
      set({ profile: data });
    }
  },
}));

export default useProfile;
