import { ErrorAPI, HeroAPI, SearchNameAPI } from '../types/api.types';
import randomHeros from './randomHeros';
import request from './request';

const API_URL = `https://superheroapi.com/api/${process.env.ACCESS_TOKEN}`;

const isError = (data: HeroAPI | ErrorAPI | SearchNameAPI): data is ErrorAPI =>
  data.response === 'error';

export const searchByName = async (name: string) => {
  const data = await request<SearchNameAPI | ErrorAPI>(
    `${API_URL}/search/${name}`,
  );

  if (isError(data)) {
    return {
      response: 'success',
      'results-for': name,
      results: [],
    };
  }

  return data;
};

export const searchSuperHeroByName = async (
  name: string,
  signal?: AbortSignal,
) => searchByName(name);

export const getHero = async (id: string) => {
  const data = await request<HeroAPI | ErrorAPI>(`${API_URL}/${id}`);

  if (isError(data)) {
    throw new Error(data.error);
  }

  return data;
};

export const randomBattle = async () =>
  Promise.all(randomHeros(2).map(({ id }) => getHero(id.toString())));
