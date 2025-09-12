import { Container } from '@mui/material';
import { Outlet } from 'react-router';
import Header from '../Header';
import Box from '@mui/material/Box';

export default function AppLayout() {
  return (
    <>
      <Header />
      <Container maxWidth="lg">
        <Box marginBlock={10} marginInline={5}>
          <Outlet />
        </Box>
      </Container>
    </>
  );
}
