import Layout from '@components/Layout/Layout';
import '@styles/fontStyle.css';

function MyApp({ Component, pageProps }) {
  return <Layout {...pageProps}>
    <Component {...pageProps} />
  </Layout>
}
MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};
export default MyApp
