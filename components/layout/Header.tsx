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
  return path === '/location' ? (
    <div className="flex w-[500px] h-[60px] px-5 justify-between items-center fixed top-0 left-0 right-0 ml-auto mr-auto bg-white z-20 ">
      <ChevronLeftIcon className="w-[30px] h-[30px] cursor-pointer hover:text-blue-700" />
      <ArrowUpTrayIcon className="w-[30px] h-[30px] cursor-pointer hover:text-blue-700" />
    </div>
  ) : (
    <div className="flex w-[500px] h-[60px] px-5 justify-between items-center fixed top-0 left-0 right-0 ml-auto mr-auto bg-white z-20 border border-blue-500">
      <MagnifyingGlassIcon className="w-[30px] h-[30px] cursor-pointer hover:text-blue-700" />
      <BellIcon className="w-[30px] h-[30px] cursor-pointer hover:text-blue-700" />
    </div>
  );
};

export default Header;
