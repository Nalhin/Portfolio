import React from 'react';
import App from 'next/app';
import { appWithTranslation } from '../lib/i18n/i18n';
import NavBar from '../components/navigation/NavBar';
import { AnimatePresence } from 'framer-motion';

class MyApp extends App {
  render() {
    const { Component, pageProps } = this.props;
    return (
      <AnimatePresence exitBeforeEnter>
        <NavBar />
        <Component {...pageProps} />
      </AnimatePresence>
    );
  }
}

export default appWithTranslation(MyApp);
