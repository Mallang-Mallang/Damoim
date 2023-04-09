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

interface MyAppProps extends AppProps {
  Component: NextPageWithLayout;
}

type NextPageWithLayout = NextPage & {
  getLayout?: (page: React.ReactElement) => React.ReactNode;
};

export default function App({ Component, pageProps }: MyAppProps) {
  const getLayout = Component.getLayout ?? ((page) => <Layout>{page}</Layout>);

  return getLayout(<Component {...pageProps} />);
}
