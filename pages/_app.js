import { useEffect, useLayoutEffect } from 'react';
import Head from 'next/head';
import GlobalStyles from '../components/styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../components/styles/theme.js';
import Layout from '../components/layout/layout';




function MyApp({ Component, pageProps }) {

  // suppress useLayoutEffect warnings when running outside a browser
  if (!process.browser) useLayoutEffect = useEffect;
  
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
