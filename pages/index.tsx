import Head from 'next/head';
import Map from '@/components/Map';

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Map latitude={37.403256570432745} longitude={126.9306839711054} />
    </>
  );
}
