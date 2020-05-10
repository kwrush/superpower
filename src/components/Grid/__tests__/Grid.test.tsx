import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import Grid from '..';

describe('Grid', () => {
  it('should render row of cards', () => {
    const heros = [
      {
        id: 1,
        name: 'Spider-Man',
        slug: '123',
        images: {
          sm: 'img',
        },
      },
      {
        id: 2,
        name: 'Batman',
        slug: '456',
        images: {
          sm: 'img',
        },
      },
    ];

    const { container } = render(
      <MemoryRouter>
        <Grid heros={heros as any} />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="grid"
      >
        <div
          class="grid-item"
        >
          <a
            class="card"
            href="/123"
          >
            <img
              alt="Spider-Man"
              class="card-image"
              src="img"
            />
            <p
              class="card-caption"
            >
              Spider-Man
            </p>
          </a>
        </div>
        <div
          class="grid-item"
        >
          <a
            class="card"
            href="/456"
          >
            <img
              alt="Batman"
              class="card-image"
              src="img"
            />
            <p
              class="card-caption"
            >
              Batman
            </p>
          </a>
        </div>
      </div>
    `);
  });

  it('should render no result', () => {
    const { container } = render(<Grid heros={[]} />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="grid"
      >
        <p
          class="no-result"
        >
          <span
            aria-label="Supervillain"
            class="emoji"
            role="img"
          >
            🦹
          </span>
          No heros found
        </p>
      </div>
    `);
  });
});
