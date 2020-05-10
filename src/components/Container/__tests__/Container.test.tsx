import React from 'react';
import { render } from '@testing-library/react';
import Container from '..';

describe('Container', () => {
  it('should render children', () => {
    const { container } = render(
      <Container>
        <div>children</div>
      </Container>,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="container"
      >
        <div>
          children
        </div>
      </div>
    `);
  });
});
