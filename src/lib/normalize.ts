import { HeroAPI } from '~app/types/response';
import { HeroEntity } from '~app/types/app';

const normalize = (heros: HeroAPI | HeroAPI[]): HeroEntity => {
  if (!Array.isArray(heros)) {
    return {
      [heros.id]: { ...heros },
    };
  }

  return heros.reduce((acc, curr) => {
    const { id } = curr;
    return {
      ...acc,
      [id]: curr,
    };
  }, {});
};

export default normalize;
