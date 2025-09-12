import { createTheme } from '@mui/material';

const base = createTheme({
  palette: {
    mode: 'light',
    accent: 'rgb(219, 39, 119)',
  },
  shape: {
    borderRadius: 6,
    borderRadiusScale: {
      md: 4,
      lg: 8,
      xl: 12,
    },
  },
  typography: {
    fontFamily: 'Noto Sans',
  },
});

export const theme = createTheme(base, {
  components: {
    MuiBadge: {
      styleOverrides: {
        root: {
          '& .MuiBadge-badge': {
            backgroundColor: base.palette.accent,
            color: 'white',
          },
        },
      },
    },

    MuiButton: {
      defaultProps: {
        variant: 'contained',
      },
      styleOverrides: {
        root: {
          variants: [
            {
              props: { variant: 'contained' },
              style: {
                backgroundColor: base.palette.accent,
              },
            },
            {
              props: { variant: 'outlined' },
              style: {
                border: `2px solid ${base.palette.accent}`,
                color: base.palette.accent,
              },
            },
            {
              props: { variant: 'text' },
              style: {
                color: base.palette.common.black,
              },
            },
          ],
          fontWeight: 700,
          textTransform: 'capitalize',
          fontSize: base.typography.pxToRem(16),
          paddingInline: base.spacing(2),
          paddingBlock: base.spacing(1),
        },
      },
    },
  },
});

// rgb(219, 39, 119)
