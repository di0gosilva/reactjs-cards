import { createRoot } from 'react-dom/client';
import React from 'react';
import './styles/global-styles.css';

import {Home} from '../src/templates/Home/Index'

const root = createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Home />
  </React.StrictMode>,
);