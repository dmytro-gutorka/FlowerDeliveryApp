import CartProductList from '../../components/CartProductList';
import Typography from '@mui/material/Typography';

export default function Cart() {
  return (
    <>
      <Typography>Total items:</Typography>
      <Typography>Total price:</Typography>
      <CartProductList />
    </>
  );
}
