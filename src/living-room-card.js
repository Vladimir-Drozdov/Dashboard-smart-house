import { LitElement, html, css } from 'lit';
import './quick-actions.js';
import './living-room-header.js';

export class LivingRoomCard extends LitElement {
  static styles = css`
    :host {
      display: block;
      box-sizing: border-box;
      height: 100%;
    }

    *, *::before, *::after {
      box-sizing: inherit;
    }

    .card {
      border-radius: 24px;
      overflow: hidden;
      box-shadow: 0 4px 12px rgba(0, 0, 0, 0.05);
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .header-wrapper {
      flex: 1 1 auto;
      min-height: 0;
      height:250px;
      margin-bottom: 16px;
    }

    .actions-wrapper {
      flex: 1 1 auto;
      min-height: 0;
      display: flex;
      flex-direction: column;
      height: 100%;
    }

    .actions-wrapper ::slotted(quick-actions),
    quick-actions {
      display: flex;
      flex-direction: column;
      height: 100%;
      width: 100%;
    }

    .actions-wrapper ::slotted(quick-actions .quick-actions),
    quick-actions .quick-actions {
      flex: 1 1 auto;
      align-content: start; 
    }
  `;

  render() {
    return html`
      <div class="card">
        <div class="header-wrapper">
          <living-room-header></living-room-header>
        </div>
        <div class="actions-wrapper">
          <quick-actions></quick-actions>
        </div>
      </div>
    `;
  }
}

customElements.define('living-room-card', LivingRoomCard);