import request from './request';

const API_URL = 'https://superhero-search.p.rapidapi.com';

export const searchSuperHeroByName = async (name: string) => {
  const data = await request(`${API_URL}/?hero=${name}`);
  return data;
};

export const searchSuperHeorById = async (id: number) => {
  const data = await request(`${API_URL}/?id=${id}`);
  return data;
};
