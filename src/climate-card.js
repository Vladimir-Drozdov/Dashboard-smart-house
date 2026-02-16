import { LitElement, html, css } from 'lit';
import './floor-tabs.js';
import './climate/index.js';

export class ClimateCard extends LitElement {
  static properties = {
    currentFloor: { type: String }
  };

  static styles = css`
    :host {
      display: block;
    }

    .card {
      border-radius: 24px;
      padding: 24px 24px 24px 0px;
    }

    h2 {
      font-size: 24px;
      font-weight: 400;
      color: #FFFFFF;
      margin: 20px 0 20px 0;
    }
  `;

  constructor() {
    super();
    this.currentFloor = 'floor1';
  }

  handleTabChange(e) {
    this.currentFloor = e.detail.tabId;
  }

  render() {
    return html`
      <div class="card">
        <floor-tabs @tab-change=${this.handleTabChange}></floor-tabs>
        <h2>Климат</h2>
        <climate-block floor=${this.currentFloor}></climate-block>
      </div>
    `;
  }
}

customElements.define('climate-card', ClimateCard);