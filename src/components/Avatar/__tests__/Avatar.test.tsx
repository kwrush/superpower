import React from 'react';
import { render } from '@testing-library/react';
import Avatar from '../Avatar';

describe('Avatar', () => {
  it('should render the image', () => {
    const { container } = render(<Avatar src="image" alt="image" />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <figure
        class="avatar"
      >
        <img
          alt="image"
          class="image"
          src="image"
        />
      </figure>
    `);
  });
});
