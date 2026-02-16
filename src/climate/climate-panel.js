import { LitElement, html, css } from 'lit';
import './radiator-card.js';
import './convector-card.js';

export class ClimateBlock extends LitElement {
  static properties = {
    floor: { type: String } // 'floor1', 'floor2', 'yard'
  };

  static styles = css`
    :host {
      display: block;
      background: #1c1b1f;
      color: white;
      font-family: Roboto, sans-serif;
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(3, 1fr);
      gap: 16px;
    }

    .radiators {
      display: flex;
      flex-direction: column;
      gap: 16px;
      width: 100%;
    }

    radiator-card, convector-card {
      width: 100%;
    }

    @media (max-width: 960px) {
      .grid {
        grid-template-columns: repeat(2, 1fr);
      }
    }

    @media (max-width: 680px) {
      .grid {
        grid-template-columns: 1fr;
        justify-items: center;
      }
      
      .radiators,
      convector-card {
        max-width: 400px;
        width: 100%;
      }
    }
  `;

  constructor() {
    super();
    this.floor = 'floor1';
  }

  getFloorConfig() {
    const configs = {
      floor1: {
        radiators: [
          { room: 'Кладовая' },
          { room: 'Гардероб' }
        ],
        convectors: [
          { room: 'Гостиная' },
          { room: 'Гостевая спальня' }
        ]
      },
      floor2: {
        radiators: [
          { room: 'Кладовая' },  
          { room: 'Гардероб' }
        ],
        convectors: [
          { room: 'Гостиная' },    
          { room: 'Гостевая спальня' }
        ]
      },
      yard: {
        radiators: [],
        convectors: []
      }
    };
    return configs[this.floor] || configs.floor1;
  }

  render() {
    const config = this.getFloorConfig();
    
    return html`
      <div class="grid">
        ${this.floor === 'floor1' ? html`
          <div class="radiators">
            ${config.radiators.map(r => html`
              <radiator-card title="Радиатор" room=${r.room}></radiator-card>
            `)}
          </div>
          
          ${config.convectors.map(c => html`
            <convector-card title="Конвектор" room=${c.room}></convector-card>
          `)}
        ` : this.floor === 'floor2' ? html`
          <convector-card title="Конвектор" room=${config.convectors[0].room}></convector-card>
          
          <div class="radiators">
            ${config.radiators.map(r => html`
              <radiator-card title="Радиатор" room=${r.room}></radiator-card>
            `)}
          </div>
          
          <convector-card title="Конвектор" room=${config.convectors[1].room}></convector-card>
        ` : html`
          <div style="grid-column: 1/-1; text-align: center; padding: 50px; background: #2a2a2a; border-radius: 24px;">
            <span style="font-size: 48px;">🌳</span>
            <h3 style="color: white;">Дворовая территория</h3>
            <p style="color: rgba(255,255,255,0.5);">Скоро здесь появятся датчики освещения, полива и погоды</p>
          </div>
        `}
      </div>
    `;
  }
}

customElements.define('climate-block', ClimateBlock);