import React from 'react';
import { render } from '@testing-library/react';
import Loader from '..';

describe('Loader', () => {
  it('should render a loader', () => {
    const { container } = render(<Loader />);

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="loader"
      >
        <img
          alt="logo"
          class="logo"
          src="[object Object]"
        />
      </div>
    `);
  });
});
