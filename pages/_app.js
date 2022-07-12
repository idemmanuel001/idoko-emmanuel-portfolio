import GlobalStyles from '../Components/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Components/styles/theme.js';




function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider theme={theme}>
      <GlobalStyles />
      <Component {...pageProps} />
    </ThemeProvider>
  );
}

export default MyApp;
