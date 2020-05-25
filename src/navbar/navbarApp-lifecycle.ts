import * as React from 'react';
import * as ReactDOM from 'react-dom';
import singleSpaReact from 'single-spa-react';
import Navbar from './navbarApp';

const reactLifecycles = singleSpaReact({
  React,
  ReactDOM,
  rootComponent: (Navbar as any),
  domElementGetter,
});

export const bootstrap = [
  reactLifecycles.bootstrap,
];
export const mount = [
  reactLifecycles.mount,
];
export const unmount = [
  reactLifecycles.unmount,
];

function domElementGetter() {
  return document.getElementById("navbar") as any;
}
