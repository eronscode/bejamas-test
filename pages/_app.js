import Layout from '@components/Layout/Layout';
import '@styles/fontStyle.css';

function MyApp({ Component, pageProps }) {
  return <Layout {...pageProps}>
    <Component {...pageProps} />
  </Layout>
}

export default MyApp
