import { PropsWithChildren } from 'react';
import Header from './Header';
import Tabbar from './Tabbar';
import { useRouter } from 'next/router';

const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  return (
    <div className="flex justify-center w-full h-screen bg-zinc-50">
      {router.pathname === '/login' ? null : <Header path={router.pathname} />}
      <div
        className={`w-[500px] h-full ${
          router.pathname === '/login' || 'pt-[60px]'
        } pb-[65px] bg-white overflow-auto`}
      >
        {children}
      </div>
      <Tabbar />
    </div>
  );
};

export default Layout;
