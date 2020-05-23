import React from 'react';
import { render } from '@testing-library/react';
import NoResult from '../NoResult';

describe('NoResult', () => {
  it('should render NoResult', () => {
    const { container } = render(<NoResult />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="wrapper"
      >
        <p
          class="alert"
        >
          <span
            aria-label="Supervillain"
            class="emoji"
            role="img"
          >
            🦹‍♂️
          </span>
          No heros found
        </p>
      </div>
    `);
  });
});
