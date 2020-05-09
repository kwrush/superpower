import React from 'react';
import { render } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import Header from '..';

describe('Header', () => {
  it('should render header', () => {
    const { container } = render(
      <MemoryRouter>
        <Header />
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <header
        class="header"
      >
        <h3>
          <a
            class="header-link"
            href="/"
          >
            <span
              aria-label="superhero"
              class="emoji"
              role="img"
            >
              🦸
            </span>
            Superpower
          </a>
        </h3>
      </header>
    `);
  });
});
