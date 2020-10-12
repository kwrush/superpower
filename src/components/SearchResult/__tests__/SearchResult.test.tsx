import React from 'react';
import { render, fireEvent, getByText } from '@testing-library/react';
import { MemoryRouter } from 'react-router';
import SearchResult from '../SearchResult';

describe('SearchResult', () => {
  const hero = {
    id: 123,
    name: 'Hero',
    biography: {
      alignment: 'good',
    },
    images: { sm: 'image' },
  };

  it('should render the search result', () => {
    const { container } = render(
      <MemoryRouter>
        <SearchResult
          searchResult={hero as any}
          addPlayer={jest.fn()}
          onClear={jest.fn()}
        />
      </MemoryRouter>,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="result"
      >
        <a
          class="card-good card"
          href="/profile/123-hero"
        >
          <img
            alt="Hero"
            class="card-image"
            src="image"
          />
          <p
            class="card-caption"
          >
            Hero
          </p>
        </a>
        <button
          class="button"
          type="button"
        >
          Add to arena
        </button>
      </div>
    `);
  });

  it('should call addPlayer and onClear when click on the button', () => {
    const addPlayer = jest.fn();
    const onClear = jest.fn();
    const { container } = render(
      <MemoryRouter>
        <SearchResult
          searchResult={hero as any}
          addPlayer={addPlayer}
          onClear={onClear}
        />
      </MemoryRouter>,
    );

    fireEvent.click(getByText(container, 'Add to arena'));

    expect(addPlayer).toHaveBeenCalledWith(hero);
    expect(onClear).toHaveBeenCalledTimes(1);
  });
});
