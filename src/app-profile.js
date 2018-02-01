import { Element as PolymerElement } from '../polymer/node_modules/@polymer/polymer/polymer-element.js';
import { StencilRouteLink } from '@stencil/router';

export class AppProfile extends PolymerElement {
    static get is() { return 'app-profile' }

    static get template() {
      return `
      <h1>Profile</h1>
      <stencil-route-link url='/'>
        <button>
          Home page
        </button>
      </stencil-route-link>
    `;
  }
}

customElements.define(AppProfile.is, AppProfile);