import { Stack, useTheme } from '@mui/material';
import Typography from '@mui/material/Typography';
import IconButton from '@mui/material/IconButton';
import WestOutlinedIcon from '@mui/icons-material/WestOutlined';
import { useNavigate } from 'react-router';

interface NavigationArrowButtonProps {
  direction?: string | -1 | 1;
}

export default function NavigationArrowButton({ direction = '/' }: NavigationArrowButtonProps) {
  const navigate = useNavigate();
  const theme = useTheme();

  const handleClick = async () => {
    if (typeof direction === 'number') {
      await navigate(direction);
    } else {
      await navigate(direction);
    }
  };

  return (
    <Stack direction="row" alignItems="center" mb={5} gap={2}>
      <IconButton
        onClick={() => handleClick}
        aria-label="back to home"
        sx={{
          backgroundColor: theme.palette.grey[100],
          borderRadius: theme.shape.borderRadiusScale.sm,
        }}
      >
        <WestOutlinedIcon />
      </IconButton>
      <Typography variant="h5" fontWeight={700}>
        Shopping Cart
      </Typography>
    </Stack>
  );
}
