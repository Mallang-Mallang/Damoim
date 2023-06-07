import Layout from '@/components/layout';
import '@/styles/globals.css';
import { NextPage } from 'next';
import { Session } from 'next-auth';
import { SessionProvider } from 'next-auth/react';
import type { AppProps } from 'next/app';
//kakao map global interface
declare global {
  interface Window {
    kakao: any;
  }
}

export default function App({
  Component,
  pageProps,
}: AppProps<{ session: Session }>) {
  return (
    <SessionProvider session={pageProps.session}>
      <Layout>
        <Component {...pageProps} />
      </Layout>
    </SessionProvider>
  );
}
