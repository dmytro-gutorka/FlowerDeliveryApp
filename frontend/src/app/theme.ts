import {createTheme} from "@mui/material";

export const theme = createTheme({
    palette: {
        mode: 'light',
        // primary: { main: 'rgb(219, 39, 119)' },
        secondary: { main: '#10b981' },
        accent: {
            main: 'rgb(219, 39, 119)'
        },
    },
    shape: { borderRadius: 12 },

    components: {
        MuiButton: {
            styleOverrides: {
                root: {
                    fontWeight: 900,
                    textTransform: 'capitalize',
                    fontSize: '1rem',
                }
            }

        },
    }
});



// rgb(219, 39, 119)