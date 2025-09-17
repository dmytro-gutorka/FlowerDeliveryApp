import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material';
import { useMutation, useQueryClient } from '@tanstack/react-query';
import { SERVER_URL } from '../../app/constants.ts';

interface LikeButtonProps {
  isActive: boolean;
  productId: string;
}

export default function LikeButton({ isActive, productId }: LikeButtonProps) {
  const theme = useTheme();
  const queryClient = useQueryClient();

  const { mutate: createFav } = useMutation({
    mutationFn: async () => {
      return await fetch(`${SERVER_URL}/api/v1/favorites`, {
        body: JSON.stringify({ productId }),
        credentials: 'include',
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  const { mutate: deleteFav } = useMutation({
    mutationFn: async () => {
      return await fetch(`${SERVER_URL}/api/v1/favorites/${productId}`, {
        credentials: 'include',
        method: 'DELETE',
        headers: {
          'Content-Type': 'application/json',
        },
      });
    },
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['products'] });
    },
  });

  return (
    <IconButton
      size="medium"
      sx={{
        position: 'absolute',
        top: 10,
        right: 10,
        backgroundColor: isActive ? 'rgb(239 68 68)' : theme.palette.grey[100],
        '&:hover .MuiSvgIcon-root': {
          fill: 'rgb(239 68 68)',
        },
        '&:hover': {
          backgroundColor: !isActive ? 'white' : theme.palette.grey[300],
        },
      }}
    >
      {isActive ? (
        <FavoriteIcon htmlColor="white" fontSize="medium" onClick={deleteFav} />
      ) : (
        <FavoriteBorderIcon fontSize="medium" onClick={createFav} />
      )}
    </IconButton>
  );
}
