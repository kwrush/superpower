import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import ArenaCard from '../ArenaCard';

describe('AreanCard', () => {
  const player = {
    id: 123,
    name: 'hero',
    biography: {
      alignment: 'good',
    },
    images: {
      sm: 'image',
    },
  };
  it('should render', () => {
    const players = [player, { ...player, id: 456 }] as any;
    const { container } = render(
      <MemoryRouter>
        <ArenaCard players={players} />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="arena"
      >
        <h3
          class="header"
        >
          <span
            aria-label="crossed-swords"
            role="img"
          >
            ⚔️
          </span>
          Arena
        </h3>
        <ul
          class="players"
        >
          <li
            class="player"
          >
            <a
              class="card-good card"
              href="/profile/123-hero"
            >
              <img
                alt="hero"
                class="card-image"
                src="image"
              />
              <p
                class="card-caption"
              >
                hero
              </p>
            </a>
          </li>
          <li
            class="player"
          >
            <a
              class="card-good card"
              href="/profile/456-hero"
            >
              <img
                alt="hero"
                class="card-image"
                src="image"
              />
              <p
                class="card-caption"
              >
                hero
              </p>
            </a>
          </li>
        </ul>
        <a
          class="link"
          href="/arena/123v456"
        >
          Compare
        </a>
      </div>
    `);
  });
});
