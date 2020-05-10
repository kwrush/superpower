import request from '../request';
import { searchSuperHeroByName, searchSuperHeorById } from '../api';

jest.mock('../request');

describe('api', () => {
  beforeEach(() => {
    (request as jest.Mock).mockResolvedValue('data');
  });

  afterEach(() => {
    jest.resetAllMocks();
  });

  it('should seach hero by name', async () => {
    const data = await searchSuperHeroByName('name');

    expect(request).toHaveBeenCalledWith('https://superhero-search.p.rapidapi.com/?hero=name');
    expect(data).toBe('data');
  });

  it('should seach hero by name', async () => {
    const data = await searchSuperHeorById(123);

    expect(request).toHaveBeenCalledWith('https://superhero-search.p.rapidapi.com/?id=123');
    expect(data).toBe('data');
  });
});
