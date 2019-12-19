import React from 'react';
import NavBar from '../navigation/NavBar';
import Footer from '../footer/Footer';
import styled from '../../styles/styled';
import Head from 'next/head';

const StyledContainer = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
`;

const Layout: React.FC = ({ children }) => {
  return (
    <StyledContainer>
      <Head>
        <title>Portfolio</title>
        <meta charSet="utf-8" />
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
        <link
          rel="shortcut icon"
          type="image/x-icon"
          href="favicon/favicon.ico"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Inconsolata|Poppins&display=swap"
          rel="stylesheet"
        />
      </Head>
      <NavBar />
      {children}
      <Footer />
    </StyledContainer>
  );
};

export default Layout;
