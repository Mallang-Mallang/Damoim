import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const Header = () => {
  return (
    <div className="flex w-[500px] h-[60px] px-5 justify-between items-center fixed top-0 left-0 right-0 ml-auto mr-auto bg-white z-20 border border-blue-500">
      <Link href="/">
        <h1 className="my-auto hover:cursor-pointer">다모임</h1>
      </Link>
      <MagnifyingGlassIcon className="w-[30px] h-[30px] cursor-pointer hover:text-orange-500" />
    </div>
  );
};

export default Header;
