import { Button, Stack } from '@mui/material';
import EmptyCartIcon from '../../assets/EmptyCartIcon';
import Typography from '@mui/material/Typography';
import { theme } from '../../app/theme.ts';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { useNavigate } from 'react-router';

export default function EmptyCart() {
  const navigation = useNavigate();

  return (
    <Stack alignItems="center" justifyContent="center" spacing={3} paddingBlock={15}>
      <EmptyCartIcon size={80} color={theme.palette.grey[400]} />
      <Typography variant="h5" fontWeight={700}>
        Your cart is empty
      </Typography>
      <Typography>Discover beautiful flowers to add to your cart</Typography>
      <Button onClick={() => navigation(-1)} startIcon={<ArrowBackRoundedIcon />}>
        Continue Shopping
      </Button>
    </Stack>
  );
}
