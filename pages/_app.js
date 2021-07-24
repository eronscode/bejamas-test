import Layout from "@components/Layout";
import "@styles/fontStyle.css";
import { AppProvider } from "context/app.context";

function MyApp({ Component, pageProps }) {
  return (
    <AppProvider>
      <Layout {...pageProps}>
        <Component {...pageProps} />
      </Layout>
    </AppProvider>
  );
}
MyApp.getInitialProps = async function ({ Component, ctx }) {
  let pageProps = {};
  if (Component.getInitialProps) {
    pageProps = await Component.getInitialProps(ctx);
  }
  pageProps.query = ctx.query;
  return { pageProps };
};
export default MyApp;
