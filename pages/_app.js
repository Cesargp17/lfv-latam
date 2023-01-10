import { CssBaseline, ThemeProvider } from '@mui/material'
import { UIProvider } from '../context/UI/UIProvider'
import '../styles/globals.css'
import { lightTheme } from '../themes/light-theme'
import { SnackbarProvider } from 'notistack';

export default function App({ Component, pageProps }) {
  return (
    <UIProvider>
      <SnackbarProvider maxSnack={3}>
          <ThemeProvider theme={ lightTheme }>
              <CssBaseline/>
              <Component {...pageProps} />
          </ThemeProvider>
      </SnackbarProvider>
    </UIProvider>
  )
}
