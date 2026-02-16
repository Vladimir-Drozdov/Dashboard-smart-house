import { LitElement, html, css } from 'lit';

export class QuickActions extends LitElement {
  static styles = css`
    :host {
      display: block;
      width: 100%;
      height: 100%; 
    }

    .quick-actions {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(132.57px, 1fr));
      gap: 8px;
      width: 100%;
      height: 100%; 
      align-content: start; 
    }

    .action-btn {
      position: relative;
      background: #343239;
      border-radius: 24px;
      border: none;
      cursor: pointer;
      display: flex;
      flex-direction: column;
      align-items: center;
      padding: 0;
      transition: all 0.2s ease;
      height: 168px;
      width: 100%;
      min-width: 0;
    }

    .action-btn.active {
      background: rgba(230, 83, 50, 0.2);
    }

    .icon-bg {
      position: absolute;
      height: 64px;
      left: 8px;
      right: 7.57px;
      top: 8px;
      background: #1C1B1F;
      border-radius: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .action-btn.active .icon-bg {
      background: #E65332;
    }

    .icon {
      width: 24px;
      height: 24px;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon img {
      width: 24px;
      height: 24px;
      filter: brightness(0) invert(1);
      object-fit: contain;
    }

    .label {
      position: absolute;
      left: 4px;
      right: 3.57px;
      bottom: 24px;
      font-family: 'Roboto', sans-serif;
      font-style: normal;
      font-weight: 400;
      font-size: 12px;
      line-height: 16px;
      text-align: center;
      color: #FFFFFF;
      white-space: pre-line;
      margin: 0;
    }

    .label.single-line {
      bottom: 40px;
    }
  `;

  constructor() {
    super();
    this.actions = [
      { id: 'left', icon: '${BASE_PATH}/icons/door_front.png', label: 'Ушли из дома', lines: 1, group: 'presence' },
      { id: 'arrived', icon: '${BASE_PATH}/icons/door_open.png', label: 'Пришли домой', lines: 1, group: 'presence' },
      { id: 'yard-light', icon: '${BASE_PATH}/icons/lightbulb_outline.png', label: 'Освещение\nво дворе', lines: 2, group: null },
      { id: 'gate', icon: '${BASE_PATH}/icons/view_carousel.png', label: 'Заблокировать\nворота', lines: 2, group: null },
      { id: 'comfort1', icon: '${BASE_PATH}/icons/device_thermostat.png', label: '«Комфорт»\nв детской №1', lines: 2, group: null },
      { id: 'comfort2', icon: '${BASE_PATH}/icons/device_thermostat.png', label: '«Комфорт»\nв детской №2', lines: 2, group: null },
      { id: 'comfort3', icon: '${BASE_PATH}/icons/device_thermostat.png', label: '«Комфорт»\nв детской №3', lines: 2, group: null }
    ];

    this.activeActions = new Set();
  }

  handleClick(actionId) {
    const action = this.actions.find(a => a.id === actionId);

    if (action.group) {
      if (this.activeActions.has(actionId)) this.activeActions.delete(actionId);
      else {
        this.actions.forEach(a => {
          if (a.group === action.group) this.activeActions.delete(a.id);
        });
        this.activeActions.add(actionId);
      }
    } else {
      if (this.activeActions.has(actionId)) this.activeActions.delete(actionId);
      else this.activeActions.add(actionId);
    }

    this.requestUpdate();
  }

  render() {
    return html`
      <div class="quick-actions">
        ${this.actions.map(action => {
          const isActive = this.activeActions.has(action.id);

          let labelClass = 'label';
          if (action.lines === 1) labelClass += ' single-line';

          return html`
            <button
              class="action-btn ${isActive ? 'active' : ''}"
              @click=${() => this.handleClick(action.id)}
            >
              <div class="icon-bg">
                <div class="icon">
                  <img src=${action.icon} alt="">
                </div>
              </div>
              <span class="${labelClass}">${action.label}</span>
            </button>
          `;
        })}
      </div>
    `;
  }
}

customElements.define('quick-actions', QuickActions);