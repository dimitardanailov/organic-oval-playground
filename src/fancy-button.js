export class FancyButton extends HTMLButtonElement {
  constructor() {
    super(); // always call super() first in the constructor.
    this.addEventListener('click', () => this.drawRipple());
  }
  
  drawRipple() {
    let div = document.createElement('div');
    div.innerText = 'Custom text'

    this.appendChild(div);
  }
}

customElements.define('fancy-button', FancyButton, { extends: 'button' });