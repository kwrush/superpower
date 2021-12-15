import request from './request';

const API_URL = 'https://superhero-search.p.rapidapi.com/api';

export const randomHeros = async (signal?: AbortSignal) =>
  request(`${API_URL}/heros`, signal);

export const searchSuperHeroByName = async (
  name: string,
  signal?: AbortSignal,
) => {
  const data = await request(`${API_URL}/?hero=${name}`, signal);
  return data;
};
