import { createTheme } from '@mui/material';

const base = createTheme({
  palette: {
    mode: 'dark',
    accent: 'rgb(219, 39, 119)',
  },
  shape: {
    borderRadius: 6,
    borderRadiusScale: {
      sm: 1,
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
    MuiFormControl: {
      styleOverrides: {
        root: {
          margin: 0,
          padding: '0px 0px 0px 0px',
        },
      },
    },
    // MuiOutlinedInput: {
    //   styleOverrides: {
    //     notchedOutline: {
    //       height: base.spacing(6),
    //     },
    //     root: {
    //       height: base.spacing(5),
    //       margin: 0,
    //       padding: '0px 0px 0px 0px',
    //     },
    //   },
    // },
    // MuiInputBase: {
    //   styleOverrides: {
    //     root: {
    //       margin: 0,
    //       padding: '0px 0px 0px 0px',
    //
    //       '& .MuiInputBase-input': {
    //         margin: 0,
    //         paddingInline: base.spacing(1),
    //       },
    //     },
    //   },
    // },
  },
});

// MuiInputBase-input
