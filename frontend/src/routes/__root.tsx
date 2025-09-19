import { TanStackRouterDevtools } from '@tanstack/react-router-devtools';
import { Container } from '@mui/material';
import { createRootRoute, Outlet } from '@tanstack/react-router';
import Header from '../components/Header';

const RootLayout = () => (
  <>
    <Header />
    <Container maxWidth="lg" component="main" sx={{ padding: 10 }}>
      <Outlet />
      <TanStackRouterDevtools />
    </Container>
  </>
);

export const Route = createRootRoute({ component: RootLayout });
