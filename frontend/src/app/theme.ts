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
                // paddingInline: 2,
                // paddingBlock: 1,
              },
            },
          ],
          fontWeight: 700,
          textTransform: 'capitalize',
          fontSize: base.typography.pxToRem(16),
          backgroundColor: base.palette.accent,
          paddingInline: base.spacing(2),
          paddingBlock: base.spacing(1),
        },
      },
    },
  },
});

// rgb(219, 39, 119)
