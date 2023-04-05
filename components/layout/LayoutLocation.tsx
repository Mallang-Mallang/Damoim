import { PropsWithChildren } from 'react';
import Tabbar from './Tabbar';
import HeaderLocation from './HeaderLocation';

const LayoutLocation = ({ children }: PropsWithChildren) => {
  return (
    <div className="flex justify-center h-screen bg-zinc-50 overflow-auto">
      <div className="w-[500px]  border border-red-500">
        <HeaderLocation />
        {children}
        <Tabbar />
      </div>
    </div>
  );
};

export default LayoutLocation;
