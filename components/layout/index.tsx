import { PropsWithChildren } from 'react';
import Header from './Header';
import Tabbar from './Tabbar';

const Layout = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-center h-screen bg-zinc-50 overflow-auto">
      <div className="w-[500px] mt-[60px] mb-[65px]  border border-red-500">
        <Header />
        {children}
        <Tabbar />
      </div>
    </div>
  );
};

export default Layout;
