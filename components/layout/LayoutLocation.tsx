import { PropsWithChildren } from 'react';
import Tabbar from './Tabbar';
import HeaderLocation from './HeaderLocation';

const LayoutLocation = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex w-full justify-center h-screen bg-zinc-50 overflow-auto">
      <HeaderLocation />
      <div className="w-[500px]  border border-red-500">{children}</div>
      <Tabbar />
    </div>
  );
};

export default LayoutLocation;
