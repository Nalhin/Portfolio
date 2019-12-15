import React from 'react';
import NavBar from '../navigation/NavBar';

const Layout: React.FC = ({ children }) => {
  return (
    <div>
      <NavBar />
      {children}
    </div>
  );
};

export default Layout;
