import FavoriteBorderIcon from '@mui/icons-material/FavoriteBorder';
import FavoriteIcon from '@mui/icons-material/Favorite';
import IconButton from '@mui/material/IconButton';
import { useTheme } from '@mui/material';

interface LikeButtonProps {
  isActive: boolean;
}

export default function LikeButton({ isActive }: LikeButtonProps) {
  const theme = useTheme();

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
        <FavoriteIcon htmlColor="white" fontSize="medium" />
      ) : (
        <FavoriteBorderIcon fontSize="medium" />
      )}
    </IconButton>
  );
}
