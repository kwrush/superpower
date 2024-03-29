import React from 'react';
import { render } from '@testing-library/react';
import PowersList from '../PowersList';

describe('PowersList', () => {
  const powers = {
    intelligence: 90,
    strength: 55,
    speed: 67,
    durability: 75,
    power: 74,
    combat: 85,
  };

  it('should render with good alignment', () => {
    const { container } = render(
      <PowersList
        name="hero"
        avatar="image"
        alignment="good"
        powers={powers}
      />,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="container"
      >
        <div
          class="avatar"
        >
          <figure
            class="avatar avatar-s"
          >
            <img
              alt="hero"
              class="image"
              src="image"
            />
          </figure>
          <svg
            height="10"
            viewBox="0 0 60 10"
            width="100"
          >
            <line
              stroke="#395abd"
              stroke-width="3"
              x1="0"
              x2="60"
              y1="5"
              y2="5"
            />
            <circle
              cx="30"
              cy="5"
              fill="#395abd"
              r="4"
            />
          </svg>
        </div>
        <h4
          class="alignment alignment-good"
        >
          Alignment: 
          <span>
            good
          </span>
        </h4>
        <ul
          class="list"
        >
          <li
            class="list-item"
          >
            <span>
              intelligence
            </span>
            <span>
              90
            </span>
          </li>
          <li
            class="list-item"
          >
            <span>
              strength
            </span>
            <span>
              55
            </span>
          </li>
          <li
            class="list-item"
          >
            <span>
              speed
            </span>
            <span>
              67
            </span>
          </li>
          <li
            class="list-item"
          >
            <span>
              durability
            </span>
            <span>
              75
            </span>
          </li>
          <li
            class="list-item"
          >
            <span>
              power
            </span>
            <span>
              74
            </span>
          </li>
          <li
            class="list-item"
          >
            <span>
              combat
            </span>
            <span>
              85
            </span>
          </li>
        </ul>
      </div>
    `);
  });

  it('should render with bad alignment', () => {
    const { container } = render(
      <PowersList name="hero" avatar="image" alignment="bad" powers={powers} />,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="container"
      >
        <div
          class="avatar"
        >
          <figure
            class="avatar avatar-s"
          >
            <img
              alt="hero"
              class="image"
              src="image"
            />
          </figure>
          <svg
            height="10"
            viewBox="0 0 60 10"
            width="100"
          >
            <line
              stroke="#395abd"
              stroke-width="3"
              x1="0"
              x2="60"
              y1="5"
              y2="5"
            />
            <circle
              cx="30"
              cy="5"
              fill="#395abd"
              r="4"
            />
          </svg>
        </div>
        <h4
          class="alignment alignment-bad"
        >
          Alignment: 
          <span>
            bad
          </span>
        </h4>
        <ul
          class="list"
        >
          <li
            class="list-item"
          >
            <span>
              intelligence
            </span>
            <span>
              90
            </span>
          </li>
          <li
            class="list-item"
          >
            <span>
              strength
            </span>
            <span>
              55
            </span>
          </li>
          <li
            class="list-item"
          >
            <span>
              speed
            </span>
            <span>
              67
            </span>
          </li>
          <li
            class="list-item"
          >
            <span>
              durability
            </span>
            <span>
              75
            </span>
          </li>
          <li
            class="list-item"
          >
            <span>
              power
            </span>
            <span>
              74
            </span>
          </li>
          <li
            class="list-item"
          >
            <span>
              combat
            </span>
            <span>
              85
            </span>
          </li>
        </ul>
      </div>
    `);
  });

  it('should render with neutral alignment', () => {
    const { container } = render(
      <PowersList
        name="hero"
        avatar="image"
        alignment="neutral"
        powers={powers}
      />,
    );

    expect(container.firstChild).toMatchInlineSnapshot(`
      <div
        class="container"
      >
        <div
          class="avatar"
        >
          <figure
            class="avatar avatar-s"
          >
            <img
              alt="hero"
              class="image"
              src="image"
            />
          </figure>
          <svg
            height="10"
            viewBox="0 0 60 10"
            width="100"
          >
            <line
              stroke="#395abd"
              stroke-width="3"
              x1="0"
              x2="60"
              y1="5"
              y2="5"
            />
            <circle
              cx="30"
              cy="5"
              fill="#395abd"
              r="4"
            />
          </svg>
        </div>
        <h4
          class="alignment alignment-neutral"
        >
          Alignment: 
          <span>
            neutral
          </span>
        </h4>
        <ul
          class="list"
        >
          <li
            class="list-item"
          >
            <span>
              intelligence
            </span>
            <span>
              90
            </span>
          </li>
          <li
            class="list-item"
          >
            <span>
              strength
            </span>
            <span>
              55
            </span>
          </li>
          <li
            class="list-item"
          >
            <span>
              speed
            </span>
            <span>
              67
            </span>
          </li>
          <li
            class="list-item"
          >
            <span>
              durability
            </span>
            <span>
              75
            </span>
          </li>
          <li
            class="list-item"
          >
            <span>
              power
            </span>
            <span>
              74
            </span>
          </li>
          <li
            class="list-item"
          >
            <span>
              combat
            </span>
            <span>
              85
            </span>
          </li>
        </ul>
      </div>
    `);
  });
});
