import Head from 'next/head';
import GlobalStyles from '../Components/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../Components/styles/theme.js';
import Layout from '../Components/Layout/Layout';




function MyApp({ Component, pageProps }) {
  return (

    <>
      <Head>
        <title>Frontend Developer - Idoko Emmanuel</title>
        <meta name="description" content="idoko emmanuel frontend developer portfolio website" />
        <link rel="icon" href="/images/favicon.ico" />
      </Head>

      <ThemeProvider theme={theme}>
        <GlobalStyles />
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ThemeProvider>
    </>
  );
}

export default MyApp;
