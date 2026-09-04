import React from 'react';
import MainNav from './mainNav';
import Footer from './footer';

interface PageLayoutProps {
  children: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({ children }) => (
  <div className="flex min-h-screen flex-col bg-white">
    <MainNav />
    <main className="flex-1">{children}</main>
    <Footer />
  </div>
);

export default PageLayout;
