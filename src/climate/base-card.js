import { LitElement, html, css } from 'lit';

export class BaseCard extends LitElement {
  static properties = { 
    active: { type: Boolean },
    title: { type: String },
    room: { type: String }
  };

  static styles = css`
    .card {
      background: #343239;
      border-radius: 24px;
      padding: 16px;
      position: relative;
    }

    .header {
      display: flex;
      align-items: center;
      gap: 12px;
      margin-bottom: 12px;
    }

    .icon {
      width: 64px;
      height: 64px;
      border-radius: 20px;
      background-color: #1c1b1f;
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .icon img {
      width: 30%;
      height: 30%;
      object-fit: contain;
    }


    .icon.active {
      background-color: #e65332;
    }

    .info {
      display: flex;
      flex-direction: column;
    }

    .title {
      font-weight: 600;
    }

    .room {
      opacity: 0.6;
      font-size: 14px;
    }

    .more {
      margin-left: auto;
      width: 64px;
      height: 64px;
      border-radius: 20px;
      background-image: url("/climate-icons/icon_more.png");
      border: 1px solid #4d4a54;
      display: flex;
      align-items: center;
      justify-content: center;
      font-size: 24px;
    }
  `;

  constructor() {
    super();
    this.active = false;
  }

  toggle = () => this.active = !this.active;

  header() {
    return html`
      <div class="header">
        <div class="icon ${this.active ? 'active' : ''}" @click=${this.toggle}>
          <img src="/climate-icons/device_thermostat.png" alt="">
        </div>
        <div class="info">
          <div class="title">${this.title}</div>
          <div class="room">${this.room}</div>
        </div>
        <div class="more"></div>
      </div>
    `;
  }
}

customElements.define('base-card', BaseCard);