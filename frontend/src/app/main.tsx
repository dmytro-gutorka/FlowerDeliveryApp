import { theme } from './theme.ts';
import { router } from './router.tsx';
import { CssBaseline, ThemeProvider } from '@mui/material';
import { RouterProvider } from 'react-router/dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';

const rootEl: HTMLElement | null = document.getElementById('root');
if (!rootEl) throw new Error('Root element not found');

createRoot(rootEl).render(
  <StrictMode>
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <RouterProvider router={router} />
    </ThemeProvider>
  </StrictMode>,
);
