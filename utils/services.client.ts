import { ErrorAPI, HeroAPI, SearchNameAPI } from '../types/api.types';
import randomHeros from './randomHeros';
import request from './request';

const API_URL = `/api`;

const isError = (data: HeroAPI | ErrorAPI | SearchNameAPI): data is ErrorAPI =>
  data.response === 'error';

export const searchHeroByName = async (name: string, signal?: AbortSignal) => {
  const data = await request<SearchNameAPI | ErrorAPI>(
    `${API_URL}/search?name=${name}`,
    { signal },
  );

  if (isError(data)) {
    throw new Error(data.error);
  }

  return data;
};

export const searchSuperHeroByName = async (
  name: string,
  signal?: AbortSignal,
) => searchHeroByName(name, signal);

export const getHero = async (id: number, signal?: AbortSignal) => {
  const data = await request<HeroAPI | ErrorAPI>(`${API_URL}?id=${id}`, {
    signal,
  });

  if (isError(data)) {
    throw new Error(data.error);
  }

  console.log(data);

  return data;
};

export const getRandomHeros = async (signal?: AbortSignal) => {
  const handler = (id: number) =>
    new Promise(
      (resolve: (value: HeroAPI) => void, reject: (reason: ErrorAPI) => void) =>
        getHero(id).then(resolve).catch(reject),
    );

  return Promise.all(randomHeros(2).map(({ id }) => handler(id)));
};
