import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import {
  BellIcon,
  ChevronLeftIcon,
  ChevronRightIcon,
  ArrowUpTrayIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

interface HaederProps {
  path: string;
}

const Header = ({ path }: HaederProps) => {
  return path === '/location' ? (
    <div className="flex-col w-[500px] h-[300px] px-5 justify-between items-center fixed top-0 left-0 right-0 ml-auto mr-auto bg-white z-20 border border-blue-500">
      <div className="w-full h-[92px] flex justify-between items-center">
        <ChevronLeftIcon className="w-[30px] h-[30px] cursor-pointer hover:text-blue-700" />
        <ArrowUpTrayIcon className="w-[30px] h-[30px] cursor-pointer hover:text-blue-700" />
      </div>

      <div className="w-full h-[80px] flex justify-between items-center">
        <ChevronLeftIcon className="w-[50px] h-[50px] cursor-pointer hover:text-blue-700" />
        <h1 className="text-[32px] font-bold">대림대학교</h1>
        <ChevronRightIcon className="w-[50px] h-[50px] cursor-pointer hover:text-blue-700" />
      </div>

      <div className="w-full h-[128px] flex justify-around items-center">
        <div className="w-[100px] h-[50px] flex justify-center items-center text-white font-bold text-[18px] bg-blue-500 rounded-full">
          카페
        </div>
        <div className="w-[100px] h-[50px] flex justify-center items-center text-white font-bold text-[18px] bg-blue-500 rounded-full">
          영화
        </div>
        <div className="w-[100px] h-[50px] flex justify-center items-center text-white font-bold text-[18px] bg-blue-500 rounded-full">
          전시
        </div>
        <div className="w-[100px] h-[50px] flex justify-center items-center text-white font-bold text-[18px] bg-blue-500 rounded-full">
          공연
        </div>
      </div>
    </div>
  ) : (
    <div className="flex w-[500px] h-[60px] px-5 justify-between items-center fixed top-0 left-0 right-0 ml-auto mr-auto bg-white z-20 border border-blue-500">
      <MagnifyingGlassIcon className="w-[30px] h-[30px] cursor-pointer hover:text-blue-700" />
      <BellIcon className="w-[30px] h-[30px] cursor-pointer hover:text-blue-700" />
    </div>
  );
};

export default Header;
