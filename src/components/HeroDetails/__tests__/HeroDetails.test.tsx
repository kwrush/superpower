import React from 'react';
import { render } from '@testing-library/react';
import HeroDetails from '../HeroDetails';
import { AppearanceAPI, BiographyAPI } from '~app/types/response';

describe('HeroDetails', () => {
  it('should render', () => {
    const appearance: AppearanceAPI = {
      gender: 'Male',
      race: 'Race',
      height: ["5'10", '178 cm'],
      weight: ['165 lb', '74 kg'],
      eyeColor: 'eyeColor',
      hairColor: 'hairColor',
    };
    const biography: BiographyAPI = {
      fullName: 'HeroName',
      alterEgos: '',
      aliases: ['Aliases'],
      placeOfBirth: 'New York, New York',
      firstAppearance: 'Book',
      publisher: 'Marvel Comics',
      alignment: 'good',
    };

    const { container } = render(<HeroDetails biography={biography} appearance={appearance} />);
    expect(container.firstChild).toMatchInlineSnapshot(`
      <section
        class="details"
      >
        <ul
          class="list"
        >
          <h3>
            Appearance
          </h3>
          <li
            class="item"
          >
            <span>
              Gender
            </span>
            <span>
              Male
            </span>
          </li>
          <li
            class="item"
          >
            <span>
              Race
            </span>
            <span>
              Race
            </span>
          </li>
          <li
            class="item"
          >
            <span>
              Height
            </span>
            <span>
              178 cm
            </span>
          </li>
          <li
            class="item"
          >
            <span>
              Weight
            </span>
            <span>
              74 kg
            </span>
          </li>
        </ul>
        <ul
          class="list"
        >
          <h3>
            Biography
          </h3>
          <li
            class="item"
          >
            <span>
              Full Name
            </span>
            <span>
              HeroName
            </span>
          </li>
          <li
            class="item"
          >
            <span>
              Aliases
            </span>
            <span>
              Aliases
            </span>
          </li>
          <li
            class="item"
          >
            <span>
              Place of Birth
            </span>
            <span>
              New York, New York
            </span>
          </li>
          <li
            class="item"
          >
            <span>
              Publisher
            </span>
            <span>
              Marvel Comics
            </span>
          </li>
        </ul>
      </section>
    `);
  });
});
