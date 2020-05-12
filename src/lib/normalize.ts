import { HeroAPI } from '~app/types/response';

const normalize = (heros: HeroAPI | HeroAPI[]) => {
  if (!Array.isArray(heros)) {
    return {
      [heros.slug]: { ...heros },
    };
  }

  return heros.reduce((acc, curr) => {
    const { slug } = curr;
    return {
      ...acc,
      [slug]: curr,
    };
  }, {});
};

export default normalize;
