import { ChevronLeftIcon } from '@heroicons/react/24/solid';
import Link from 'next/link';

const HeaderLocation = () => {
  return (
    <div className="flex w-[500px] h-[60px] flex-col fixed top-0 bg-white z-20 border border-blue-500">
      <div className="w-full flex justify-around items-center px-5 py-2">
        <Link href="/" className="flex-none px-2.5 py-1.5">
          <ChevronLeftIcon className="w-5 h-7" />
        </Link>
        <h1 className="w-full flex-1 text-center">맞춤분석</h1>
        <div className="flex-none w-10"></div>
      </div>
      <div className="w-full flex-1 h-0.5 flex">
        <div className="w-3/12 h-full bg-sky-500"></div>
      </div>
    </div>
  );
};

export default HeaderLocation;
