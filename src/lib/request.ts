import { HeroAPI } from '~app/types/response';

const request = (url: string): Promise<HeroAPI> =>
  fetch(url, {
    method: 'GET',
    headers: {
      'x-rapidapi-host': 'superhero-search.p.rapidapi.com',
      'x-rapidapi-key': 'f999ec059bmsh18929c33fcc8a87p15f9e2jsnde2ac4d80a62',
    },
  }).then((res) => {
    return res.json();
  });

export default request;
