import  React from 'react';
import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

function Layout({ isLoggedIn, onLogout }) {
  return (
    <div className="min-h-screen flex flex-col">
      <Header isLoggedIn={isLoggedIn} onLogout={onLogout} />
      <main className="flex-grow container mx-auto px-4 py-8">
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}

export default Layout;
 