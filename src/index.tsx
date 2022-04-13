import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './App';
import './index.css';
import { RecoilRoot } from 'recoil';

// React 18
const container = document.getElementById('root') as HTMLElement;
const root = createRoot(container);
root.render(
  <React.StrictMode>
    <RecoilRoot>
      <App />
    </RecoilRoot>
  </React.StrictMode>
);
