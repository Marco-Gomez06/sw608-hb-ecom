// M2: punto de entrada del navegador. Hidrata sin re-renderizar lo ya servido.
import { hydrate } from './hydrate.js';
hydrate(window.__STATE__);
