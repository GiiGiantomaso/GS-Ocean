import React, { ReactNode } from 'react';
import { Inter } from 'next/font/google';
import Head from 'next/head';
import './globals.css';
import Header from './components/Header';
import Footer from './components/Footer';

const inter = Inter({ subsets: ['latin'] });
interface RootLayoutProps {
  children: ReactNode;
}

export const metadata = {
  title: 'Oceanos',
  description: 'Salvar nossos oceanos',
};
const RootLayout = ({ children }: RootLayoutProps) => {
  return (
    <>
      <Head>
        <link rel="icon" href="/favicon.ico" />
        <title>{metadata.title}</title>
        <meta name="description" content={metadata.description} />
      </Head>
      <html lang="pt-br" style={{ height: '100%' }}>
        <body className={inter.className} style={{ display: 'flex', flexDirection: 'column', minHeight: '100vh' }}>
          <Header />
          <main style={{ flex: 1 }}>
            {children}
          </main>
          <Footer />
        </body>
      </html>
    </>
  );
};

export default RootLayout;