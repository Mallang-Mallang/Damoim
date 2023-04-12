import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import {
  BellIcon,
  ChevronLeftIcon,
  ArrowUpTrayIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';

interface HaederProps {
  path: string;
}

const Header = ({ path }: HaederProps) => {
  const haederType = () => {
    if (path === '/location') {
      return (
        <>
          <ChevronLeftIcon className="w-[30px] h-[30px] cursor-pointer hover:text-blue-700 ml-5" />
          <ArrowUpTrayIcon className="w-[30px] h-[30px] cursor-pointer hover:text-blue-700 mr-5" />
        </>
      );
    } else if (
      path === '/add_schedule' ||
      path === '/find' ||
      path === '/find2'
    ) {
      return (
        <div className="flex flex-col w-full">
          <div className="w-full flex justify-around items-center py-3">
            <Link href="/">
              <ChevronLeftIcon className="w-[30px] h-[30px] cursor-pointer hover:text-blue-700 ml-5" />
            </Link>
            <h1 className="w-full text-center">맞춤분석</h1>
            <div className="flex-none w-[30px] mr-5"></div>
          </div>
          <div
            className={`border-2 border-sky-500 ${
              path === '/add_schedule'
                ? 'w-1/3'
                : path === '/find'
                ? 'w-2/3'
                : 'w-3/3'
            }`}
          ></div>
        </div>
      );
    } else {
      return (
        <>
          <MagnifyingGlassIcon className="w-[30px] h-[30px] cursor-pointer hover:text-blue-700 ml-5" />
          <BellIcon className="w-[30px] h-[30px] cursor-pointer hover:text-blue-700 mr-5" />
        </>
      );
    }
  };

  return (
    <div className="flex w-[500px] h-[60px] justify-between items-center fixed top-0 bg-white z-20 border border-blue-500">
      {haederType()}
    </div>
  );
};

export default Header;
