import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import CharacterCard from '../CharacterCard';

describe('CharacterCard', () => {
  it('should render neutral character card', () => {
    const { container } = render(
      <MemoryRouter>
        <CharacterCard name="name" image="image" id={1} alignment="neutral" />
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <a
        class="card-neutral card"
        href="/profile/1-name"
      >
        <img
          alt="name"
          class="card-image"
          src="image"
        />
        <p
          class="card-caption"
        >
          name
        </p>
      </a>
    `);
  });

  it('should render good character card', () => {
    const { container } = render(
      <MemoryRouter>
        <CharacterCard name="name" image="image" id={1} alignment="good" />
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <a
        class="card-good card"
        href="/profile/1-name"
      >
        <img
          alt="name"
          class="card-image"
          src="image"
        />
        <p
          class="card-caption"
        >
          name
        </p>
      </a>
    `);
  });

  it('should render bad character card', () => {
    const { container } = render(
      <MemoryRouter>
        <CharacterCard name="name" image="image" id={1} alignment="bad" />
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <a
        class="card-bad card"
        href="/profile/1-name"
      >
        <img
          alt="name"
          class="card-image"
          src="image"
        />
        <p
          class="card-caption"
        >
          name
        </p>
      </a>
    `);
  });
});
