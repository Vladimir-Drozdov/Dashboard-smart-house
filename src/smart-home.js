import { LitElement, html, css } from 'lit';
import './living-room-card.js';
import './climate-card.js';

export class SmartHome extends LitElement {
  static styles = css`
    :host {
    }

    .wrapper{
      width: 100%;
      font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, sans-serif;
      padding: 20px;
      max-width: 1200px; 
      background:#1C1B1F;
      margin: 0 auto;
      box-sizing:border-box;
    }
 
    .grid {
      display: flex;
      flex-direction: column;
      gap: 24px;
    }
  `;

  render() {
    return html`
      <div class="wrapper">    
        <div class="grid">
          <living-room-card></living-room-card>
          <climate-card></climate-card>
        </div>
      </div>
    `;
  }
}

customElements.define('smart-home', SmartHome);

