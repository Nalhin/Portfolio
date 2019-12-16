import React from 'react';
import NavBar from '../navigation/NavBar';
import Footer from '../footer/Footer';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
      <Footer />
    </div>
  );
};

export default Layout;
