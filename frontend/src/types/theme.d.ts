import '@mui/material/styles';

declare module '@mui/material/styles' {
  interface Palette {
    accent: string;
  }

  interface PaletteOptions {
    accent?: string;
  }
}

declare module '@mui/system' {
  interface Shape {
    borderRadiusScale: BorderRadius;
  }
}

interface BorderRadius {
  md: number;
  lg: number;
  xl: number;
}
