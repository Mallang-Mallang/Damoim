import { PropsWithChildren } from 'react';
import Header from './Header';
import Tabbar from './Tabbar';
import { useRouter } from 'next/router';

const Layout = ({ children }: PropsWithChildren) => {
  const router = useRouter();
  return (
    <div className="flex justify-center h-screen bg-zinc-50 overflow-auto">
      <div className="w-[500px] h-full mt-[60px]">
        <Header path={router.pathname} />
        {children}
        <Tabbar />
      </div>
    </div>
  );
};

export default Layout;
