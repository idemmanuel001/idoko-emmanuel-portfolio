import { useEffect, useLayoutEffect, useState } from 'react';
import Head from 'next/head';
import GlobalStyles from '../styles/globalStyles';
import { ThemeProvider } from 'styled-components';
import { theme } from '../styles/theme.js';
import Layout from '../components/layout/layout';
import Loader from '../components/loader';





function MyApp({ Component, pageProps }) {

  // suppress useLayoutEffect warnings when running outside a browser
  if (!process.browser) useLayoutEffect = useEffect;

  const [preLoader, setPreLoader] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setPreLoader(false);
    }, 3000);
  }, [preLoader]);

  return (
    preLoader ? <Loader /> : (
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
    )
  );
}

export default MyApp;
