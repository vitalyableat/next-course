import '@/styles/globals.css';
import { FC, PropsWithChildren } from 'react';
import Nav from '@/components/Nav';
import Provider from '@/components/Provider';

export const metadata = {
  title: 'Promptopia',
  description: 'Discover & Share AI Prompts'
};

const RootLayout: FC<PropsWithChildren> = ({ children }) => {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient" />
        </div>
        <main className="app">
          <Nav />
          {/*<Provider />*/}
          {children}
        </main>
      </body>
    </html>
  );
};

export default RootLayout;
