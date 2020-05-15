import normalize from '../normalize';

describe('normalize', () => {
  it('should normalize heros array', () => {
    const heros = [
      {
        name: '1-hero',
        id: 1,
      },
      {
        name: '2-hero',
        id: 2,
      },
      {
        name: '3-hero',
        id: 3,
      },
    ];

    expect(normalize(heros as any)).toEqual({
      '1': {
        name: '1-hero',
        id: 1,
      },
      '2': {
        name: '2-hero',
        id: 2,
      },
      '3': {
        name: '3-hero',
        id: 3,
      },
    });
  });

  it('should normalize hero object', () => {
    const hero = {
      name: '1-hero',
      id: 1,
    };
    expect(normalize(hero as any)).toEqual({
      '1': {
        name: '1-hero',
        id: 1,
      },
    });
  });
});
