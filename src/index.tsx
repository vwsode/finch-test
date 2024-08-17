import { createRoot } from 'react-dom/client';

import { App } from './App';
import { ThemeProvider } from './contexts/ThemeContext/ThemeContext';

const container = document.getElementById('root')!;
const root = createRoot(container);

root.render(
  <ThemeProvider themeName="standard">
    <App />
  </ThemeProvider>,
);
