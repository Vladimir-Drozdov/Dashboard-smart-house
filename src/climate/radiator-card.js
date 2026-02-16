import { html, css } from 'lit';
import { BaseCard } from './base-card.js';
import { MIN, MAX, clamp } from './constants.js';

export class RadiatorCard extends BaseCard {
  static properties = { 
    ...BaseCard.properties,
    temp: { type: Number } 
  };

  static styles = [
    BaseCard.styles,
    css`
      .controls {
        display: flex;
        align-items: center;
        justify-content: space-between;
        gap: 8px;
        margin-top: 16px;
        width: 100%;
      }

      button {
        flex: 1 1 0; 
        min-width: 0;
        max-width: 100px; 
        height: 64px;
        border-radius: 20px;
        background: #4d4a54;
        color: #ffffff;
        font-size: 24px;
        border: none;
        cursor: pointer;
      }

      button:disabled {
        opacity: 0.4;
        cursor: default;
      }

      .temp-pill {
        flex: 1 1 0; 
        min-width: 0;
        max-width: 100px; 
        height: 64px;
        padding: 0 8px;
        border-radius: 32px;
        background: #1c1b1f;
        display: flex;
        justify-content: center;
        align-items: center;
        font-family: 'Roboto', sans-serif;
        font-weight: 500;
        font-size: 18px;
        line-height: 24px;
        color: #ffffff;
        text-align: center;
      }
    `
  ];

  constructor() {
    super();
    this.temp = 24;
  }

  change(d) {
    if (!this.active) return;
    this.temp = clamp(this.temp + d, MIN, MAX);
  }

  render() {
    return html`
      <div class="card">
        ${this.header()}

        <div class="controls">
          <button
            ?disabled=${!this.active}
            @click=${() => this.change(-1)}
          >
            −
          </button>

          <div class="temp-pill">
            ${this.temp}°C
          </div>

          <button
            ?disabled=${!this.active}
            @click=${() => this.change(1)}
          >
            +
          </button>
        </div>
      </div>
    `;
  }
}

customElements.define('radiator-card', RadiatorCard);