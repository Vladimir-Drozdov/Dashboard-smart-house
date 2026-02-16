import { LitElement, html, css } from 'lit';

export class FloorTabs extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
    }

    .tabs {
      display: grid;
      grid-template-columns: repeat(3, minmax(120px, 1fr));
      gap: 8px;
      width: 100%;
    }

    .tab-btn {
      position: relative;
      height: 64px;
      background: #343239;
      border-radius: 20px;
      border: none;
      cursor: pointer;
      display: flex;
      align-items: center;
      justify-content: center;
      transition: all 0.2s ease;
      padding: 0 12px;
      width: 100%;
    }

    .tab-btn.active {
      background: #E65332;
    }

    .tab-btn span {
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 600;
      font-size: 16px;
      line-height: 20px;
      color: #FFFFFF;
      text-align: center;
      white-space: nowrap;
    }

    .tab-btn:not(.active):hover {
      background: #3d3a44;
    }

    @media (max-width: 700px) {
      .tabs {
        grid-template-columns: repeat(2, 1fr); 
      }

    }

    @media (max-width: 450px) {
      .tabs {
        grid-template-columns: 1fr;
      }
      
      .tab-btn:last-child {
        grid-column: auto;
      }
    }
  `;

  constructor() {
    super();
    this.tabs = [
      { id: 'floor1', label: 'Первый этаж' },
      { id: 'floor2', label: 'Второй этаж' },
      { id: 'yard', label: 'Дворовая территория' }
    ];
    this.activeTab = 'floor1';
  }

  handleClick(tabId) {
    this.activeTab = tabId;
    this.requestUpdate();
    this.dispatchEvent(new CustomEvent('tab-change', {
      detail: { tabId: tabId },
      bubbles: true,
      composed: true
    }));
  }

  render() {
    return html`
      <div class="tabs">
        ${this.tabs.map(tab => html`
          <button 
            class="tab-btn ${this.activeTab === tab.id ? 'active' : ''}"
            @click=${() => this.handleClick(tab.id)}
          >
            <span>${tab.label}</span>
          </button>
        `)}
      </div>
    `;
  }
}

customElements.define('floor-tabs', FloorTabs);