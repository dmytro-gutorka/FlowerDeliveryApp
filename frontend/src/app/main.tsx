import { theme } from './theme.ts';
import { CssBaseline, ThemeProvider } from '@mui/material';
// import { RouterProvider } from 'react-router/dom';
import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { routeTree } from './../routeTree.gen';
import { createRouter, RouterProvider } from '@tanstack/react-router';

const router = createRouter({ routeTree });

declare module '@tanstack/react-router' {
  interface Register {
    router: typeof router;
  }
}

const queryClient = new QueryClient();

const rootEl: HTMLElement | null = document.getElementById('root');
if (!rootEl) throw new Error('Root element not found');

createRoot(rootEl).render(
  <StrictMode>
    <QueryClientProvider client={queryClient}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <RouterProvider router={router} />
        {/*<RouterProvider router={router} />*/}
      </ThemeProvider>
    </QueryClientProvider>
  </StrictMode>,
);
