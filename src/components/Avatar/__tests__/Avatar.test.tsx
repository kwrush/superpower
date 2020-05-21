import React from 'react';
import { render } from '@testing-library/react';
import Avatar from '../Avatar';

describe('Avatar', () => {
  it('should render the image', () => {
    const { container } = render(<Avatar src="image" alt="image" />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <figure
        class="avatar avatar-m"
      >
        <img
          alt="image"
          class="image"
          src="image"
        />
      </figure>
    `);
  });

  it('should render image with the given size', () => {
    const { container } = render(<Avatar size="s" src="image" alt="image" />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <figure
        class="avatar avatar-s"
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
