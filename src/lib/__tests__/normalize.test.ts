import normalize from '../normalize';

describe('normalize', () => {
  it('should normalize heros array', () => {
    const heros = [
      {
        slug: '1-hero',
        id: 1,
      },
      {
        slug: '2-hero',
        id: 2,
      },
      {
        slug: '3-hero',
        id: 3,
      },
    ];

    expect(normalize(heros as any)).toEqual({
      '1-hero': {
        slug: '1-hero',
        id: 1,
      },
      '2-hero': {
        slug: '2-hero',
        id: 2,
      },
      '3-hero': {
        slug: '3-hero',
        id: 3,
      },
    });
  });

  it('should normalize hero object', () => {
    const hero = {
      slug: '1-hero',
      id: 1,
    };
    expect(normalize(hero as any)).toEqual({
      '1-hero': {
        slug: '1-hero',
        id: 1,
      },
    });
  });
});
