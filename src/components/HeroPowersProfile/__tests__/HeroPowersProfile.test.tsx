import React from 'react';
import { render } from '@testing-library/react';
import HeroPowersProfile from '../HeroPowersProfile';

describe('HeroPowersProfile', () => {
  it('should render', () => {
    const data = {
      name: 'hero',
      avatar: 'image',
      powers: {
        intelligence: 90,
        strength: 55,
        speed: 67,
        durability: 75,
        power: 74,
        combat: 85,
      },
    };

    const { container } = render(
      <HeroPowersProfile name={data.name} avatar={data.name} powers={data.powers} />,
    );
    expect(container.firstChild).toMatchInlineSnapshot(`
      <section
        class="profile"
      >
        <figure
          class="avatar avatar-m"
        >
          <img
            alt="hero"
            class="image"
            src="hero"
          />
        </figure>
        <div
          class="radar"
        >
          <svg
            class="radar-chart"
            preserveAspectRatio="xMidYMid meet"
            version="1.0"
            viewBox="0 0 320 240"
            width="100%"
            xmlns="http://www.w3.org/2000/svg"
          >
            <g>
              <g>
                <path
                  d="M240.0000,120.0000L200.0000,189.2820L120.0000,189.2820L80.0000,120.0000L120.0000,50.7180L200.0000,50.7180 z"
                  fill="#1a1c1e"
                  stroke="#6e698f"
                  stroke-width="0.3"
                />
                <path
                  d="M224.0000,120.0000L192.0000,175.4256L128.0000,175.4256L96.0000,120.0000L128.0000,64.5744L192.0000,64.5744 z"
                  fill="#1a1c1e"
                  stroke="#6e698f"
                  stroke-width="0.3"
                />
                <path
                  d="M208.0000,120.0000L184.0000,161.5692L136.0000,161.5692L112.0000,120.0000L136.0000,78.4308L184.0000,78.4308 z"
                  fill="#1a1c1e"
                  stroke="#6e698f"
                  stroke-width="0.3"
                />
                <path
                  d="M192.0000,120.0000L176.0000,147.7128L144.0000,147.7128L128.0000,120.0000L144.0000,92.2872L176.0000,92.2872 z"
                  fill="#1a1c1e"
                  stroke="#6e698f"
                  stroke-width="0.3"
                />
                <path
                  d="M176.0000,120.0000L168.0000,133.8564L152.0000,133.8564L144.0000,120.0000L152.0000,106.1436L168.0000,106.1436 z"
                  fill="#1a1c1e"
                  stroke="#6e698f"
                  stroke-width="0.3"
                />
              </g>
              <g>
                <g>
                  <polyline
                    points="160.0000,120.0000 240.0000,120.0000"
                    stroke="#6e698f"
                    stroke-width="0.2"
                  />
                  <text
                    dominant-baseline="central"
                    text-anchor="start"
                    x="240.0000"
                    y="120.0000"
                  >
                    intelligence(90)
                  </text>
                </g>
                <g>
                  <polyline
                    points="160.0000,120.0000 200.0000,189.2820"
                    stroke="#6e698f"
                    stroke-width="0.2"
                  />
                  <text
                    dominant-baseline="text-before-edge"
                    text-anchor="start"
                    x="200.0000"
                    y="189.2820"
                  >
                    strength(55)
                  </text>
                </g>
                <g>
                  <polyline
                    points="160.0000,120.0000 120.0000,189.2820"
                    stroke="#6e698f"
                    stroke-width="0.2"
                  />
                  <text
                    dominant-baseline="text-before-edge"
                    text-anchor="end"
                    x="120.0000"
                    y="189.2820"
                  >
                    speed(67)
                  </text>
                </g>
                <g>
                  <polyline
                    points="160.0000,120.0000 80.0000,120.0000"
                    stroke="#6e698f"
                    stroke-width="0.2"
                  />
                  <text
                    dominant-baseline="central"
                    text-anchor="end"
                    x="80.0000"
                    y="120.0000"
                  >
                    durability(75)
                  </text>
                </g>
                <g>
                  <polyline
                    points="160.0000,120.0000 120.0000,50.7180"
                    stroke="#6e698f"
                    stroke-width="0.2"
                  />
                  <text
                    dominant-baseline="text-after-edge"
                    text-anchor="end"
                    x="120.0000"
                    y="50.7180"
                  >
                    power(74)
                  </text>
                </g>
                <g>
                  <polyline
                    points="160.0000,120.0000 200.0000,50.7180"
                    stroke="#6e698f"
                    stroke-width="0.2"
                  />
                  <text
                    dominant-baseline="text-after-edge"
                    text-anchor="start"
                    x="200.0000"
                    y="50.7180"
                  >
                    combat(85)
                  </text>
                </g>
              </g>
              <g>
                <g>
                  <circle
                    cx="232.0000"
                    cy="120.0000"
                    fill="#395abd"
                    r="3"
                  />
                  <circle
                    cx="182.0000"
                    cy="158.1051"
                    fill="#395abd"
                    r="3"
                  />
                  <circle
                    cx="133.2000"
                    cy="166.4190"
                    fill="#395abd"
                    r="3"
                  />
                  <circle
                    cx="100.0000"
                    cy="120.0000"
                    fill="#395abd"
                    r="3"
                  />
                  <circle
                    cx="130.4000"
                    cy="68.7313"
                    fill="#395abd"
                    r="3"
                  />
                  <circle
                    cx="194.0000"
                    cy="61.1103"
                    fill="#395abd"
                    r="3"
                  />
                  <path
                    d="M232.0000,120.0000L182.0000,158.1051L133.2000,166.4190L100.0000,120.0000L130.4000,68.7313L194.0000,61.1103 z"
                    fill="#395abd"
                    fill-opacity="0.2"
                    stroke="#395abd"
                    stroke-width="2"
                  />
                </g>
              </g>
            </g>
          </svg>
        </div>
      </section>
    `);
  });
});
