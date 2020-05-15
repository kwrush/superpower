import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeroCard from '..';

describe('HeroCard', () => {
  it('should render the card', () => {
    const { container } = render(
      <MemoryRouter>
        <HeroCard heroImage="image" heroName="hero" id={123} />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <a
        class="card"
        href="/123"
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
    `);
  });
});
