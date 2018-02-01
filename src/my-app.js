import { Element as PolymerElement } from '../polymer/node_modules/@polymer/polymer/polymer-element.js';
import { StencilRouter, StencilRoute } from '@stencil/router';
import { AppHome } from './app-home';
import { AppProfile } from './app-profile';

export class MyApp extends PolymerElement {
    static get is() { return 'my-app' }

    static get template() {
      return `
      <h1>Hello World!</h1>
      <stencil-router>
        <stencil-route url="/" component="app-home" exact="true">
        </stencil-route>

        <stencil-route url="/profile/:name" component="app-profile">
        </stencil-route>
      </stencil-router>
    `;
  }
}

customElements.define(MyApp.is, MyApp);