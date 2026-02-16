import { LitElement, html, css } from 'lit';

export class LivingRoomHeader extends LitElement {
  static styles = css`
    :host {
      display: block;
      height: 100%;
    }

    .header {
        height:100%;
        box-sizing:border-box;
        position: relative;
        background-image: 
        linear-gradient(90deg, #222222 17.93%, rgba(34, 34, 34, 0) 98.51%),
        url('/images/renessans-park6.png');
        background-size: cover;
        background-position: center;
        padding: 16px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border:1px solid green;
    }

    .title {
      position: relative;
      z-index: 2;
      color: white;
      display: flex;
      align-items: center;
      gap: 12px;
      font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, sans-serif;
      margin-left: 14px;
      margin-top: 14px;
    }

    .title h2 {
      font-family: 'Montserrat', sans-serif;
      font-weight: 600;
      font-size: 29.8338px;
      line-height: 36px;
      margin: 0;
      color: #FFFFFF;
      text-shadow: 0 2px 4px rgba(0, 0, 0, 0.2);
      letter-spacing: -0.5px;
    }

    .image-container {
      display: flex;
      justify-content: space-between;
      align-items: flex-end;
      margin-bottom: 8px;
      width: 100%;
    }

    .extra-images {
      display: flex;
      gap: 0;
    }

    .extra-images div {
      width: 64px;
      height: 64px;
      border-radius: 100px;
      background: rgba(230, 83, 50, 0.2);
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      margin: 0 -8px;
      overflow: visible;
      background-image: inherit;
    }

    .extra-images img {
      width: 64px;
      height: 64px;
      object-fit: cover;
      border-radius: 100px;
      position: relative;
      z-index: 2;
      border: 1px solid red;
    }

    .extra-images div::after {
      content: '';
      position: absolute;
      width: 69px;
      height: 69px;
      left: 50%;
      top: 50%;
      transform: translate(-50%, -50%);
      background-image: inherit;
      background-size: cover;
      background-position: center;
      filter: blur(4px);
      border-radius: 100px;
      z-index: 1;
    }

    .extra-icons {
      display: flex;
      gap: 8px;
    }

    .extra-icon {
      width: 60px;
      height: 60px;
      background: rgba(40, 40, 40, 0.04);
      backdrop-filter: blur(13px);
      border-radius: 100px;
      display: flex;
      align-items: center;
      justify-content: center;
      box-shadow: 0 2px 4px rgba(0, 0, 0, 0.05);
    }

    .extra-icon img {
      width: 28px;
      height: 28px;
      object-fit: contain;
      filter: brightness(0) invert(1);
      opacity: 0.9;
    }
  `;

  render() {
    return html`
      <div class="header">
        <div class="title">
          <h2>Гостиная</h2>
        </div>

        <div class="image-container">
          <div class="extra-images">
            <div>
              <img src="/images/person1.png" alt="Аватарка №1">
            </div>
            <div>
              <img src="/images/person2.png" alt="Аватарка №2">
            </div>
          </div>

          <div class="extra-icons">
            <div class="extra-icon">
              <img src="/images/add.png" alt="add">
            </div>
            <div class="extra-icon">
              <img src="/images/video.png" alt="video">
            </div>
            <div class="extra-icon">
              <img src="/images/shield-tick.png" alt="shield-tick">
            </div>
          </div>
        </div>
      </div>
    `;
  }
}

customElements.define('living-room-header', LivingRoomHeader);