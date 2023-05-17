import Layout from '@/components/layout';
import '@/styles/globals.css';
import { NextPage } from 'next';
import type { AppProps } from 'next/app';

//kakao map global interface
declare global {
  interface Window {
    kakao: any;
  }
}

export default function App({ Component, pageProps }: AppProps) {
  return (
    <Layout>
      <Component {...pageProps} />
    </Layout>
  );
}
