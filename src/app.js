import { Element as PolymerElement } from '../polymer/node_modules/@polymer/polymer/polymer-element.js';

export class MyApp extends PolymerElement {
    static get is() { return 'my-app' }

    static get template() {
      return `
      <h1>Hello World!</h1>
    `;
  }
}

customElements.define('my-element', MyApp);