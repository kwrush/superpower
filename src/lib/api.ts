import request from './request';

const API_URL = 'https://superhero-search.p.rapidapi.com';

export const searchSuperHeroByName = async (name: string, signal?: AbortSignal) => {
  const data = await request(`${API_URL}/?hero=${name}`, signal);
  return data;
};

export const searchSuperHeorById = async (id: number, signal?: AbortSignal) => {
  const data = await request(`${API_URL}/?id=${id}`, signal);
  return data;
};
