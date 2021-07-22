import Head from "next/head"
import BaseStyles from '@styles/globalStyles';
import Header from "@components/Header";
import styled from 'styled-components';

function Layout({children}) {
    return (
        <>
        <BaseStyles/>
        <div>
            <Head>
                <title>Bejamas Test</title>
                <meta name="description" content="Generated by create next app" />
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <LayoutWrapper>
                <Header />
                {children}
            </LayoutWrapper>
        </div>
        </>
    )
}
const LayoutWrapper = styled.div`
  padding: 0 40px;

  @media screen and (max-width: 768px) {
    padding: 0 10px;
  }
`;


export default Layout
