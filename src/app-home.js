import { Element as PolymerElement } from '../polymer/node_modules/@polymer/polymer/polymer-element.js';
import { StencilRouteLink } from '@stencil/router';

export class AppHome extends PolymerElement {
    static get is() { return 'app-home' }

    static get template() {
      return `
      <h1>Home</h1>
      <stencil-route-link url='/profile/stencil'>
        <button>
          Profile page
        </button>
      </stencil-route-link>
    `;
  }
}

customElements.define(AppHome.is, AppHome);