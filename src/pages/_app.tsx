import React from 'react';
import App from 'next/app';
import { appWithTranslation } from '../lib/i18n/i18n';
import NavBar from '../components/navigation/NavBar';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <>
        <NavBar />
        <Component {...pageProps} />
      </>
    );
  }
}

export default appWithTranslation(MyApp);
