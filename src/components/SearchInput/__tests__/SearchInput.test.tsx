import React from 'react';
import {
  render,
  fireEvent,
  getByPlaceholderText,
} from '@testing-library/react';
import SearchInput from '..';

describe('SearchInput', () => {
  it('should render search input', () => {
    const { container } = render(
      <SearchInput onSearch={jest.fn()} onClear={jest.fn()} />,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="input-wrapper"
      >
        <span
          aria-label="Muscle"
          class="input-addon"
          role="img"
        >
          💪
        </span>
        <input
          class="input"
          placeholder="Search for heros"
        />
      </div>
    `);
  });

  it('should call onSearch when click on enter key', () => {
    const onSearch = jest.fn();
    const { container } = render(
      <SearchInput onSearch={onSearch} onClear={jest.fn()} />,
    );
    const input = getByPlaceholderText(container, 'Search for heros');
    fireEvent.keyUp(input, { keyCode: 13 });

    expect(onSearch).toHaveBeenCalled();
  });
});
