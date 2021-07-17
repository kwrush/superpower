import request from '../request';
import { searchSuperHeroByName } from '../api';

jest.mock('../request');

describe('api', () => {
  const abortController = new AbortController();
  beforeEach(() => {
    (request as jest.Mock).mockResolvedValue('data');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should seach hero by name', async () => {
    const { signal } = abortController;
    const data = await searchSuperHeroByName('name', signal);

    expect(request).toHaveBeenCalledWith(
      'https://superhero-search.p.rapidapi.com/?hero=name',
      signal,
    );
    expect(data).toBe('data');
  });
});
