import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import HeroCard from '..';

describe('HeroCard', () => {
  it('should render the card', () => {
    const { container } = render(
      <MemoryRouter>
        <HeroCard heroImage="image" heroName="hero" heroSlug="123-hero" />
      </MemoryRouter>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <a
        class="card"
        href="/123-hero"
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
