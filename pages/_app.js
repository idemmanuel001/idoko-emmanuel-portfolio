import GlobalStyles from '../Components/Styles/GlobalStyles'

function MyApp({ Component, pageProps }) {
  return(
    <>
      <GlobalStyles />
      <Component {...pageProps} />
    </>
  )
}

export default MyApp
