import { createElement } from 'react';
import { createRoot } from 'react-dom/client';

import { App } from './App';

const rootElem = document.getElementById('root');
if (rootElem !== null) createRoot(rootElem).render(createElement(App, null));
else alert('Cannot find element with id "root", something went wrong');

declare const NODE_ENV: string;
if (NODE_ENV === 'development')
  new EventSource('/esbuild').addEventListener('change', () => {
    location.reload();
  });
