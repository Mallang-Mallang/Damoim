import Map from '@/components/common/Map';
import SearchPlace from '@/components/SearchPlace';
import { MagnifyingGlassIcon, MapPinIcon } from '@heroicons/react/24/outline';
import Link from 'next/link';
import { ReactElement } from 'react';

const Location = () => {
  return (
    <div className="w-full h-full px-4 py-5 overflow-auto">
      <div className="inner flex flex-col gap-8">
        <h1 className="text-xl font-semibold">
          출발위치를 <br />
          설정해주세요.
        </h1>
        <SearchPlace />
        <div>
          <input
            type="text"
            placeholder="모임명"
            className="w-full bg-transparent placeholder-gray-700 py-2 px-2 mb-2 border-b-2 border-gray-700 focus:outline-none focus:border-b-2 focus:border-sky-500"
          />
          <input
            type="text"
            placeholder="모임 시간"
            className="w-full bg-transparent placeholder-gray-700 py-2 px-2 border-b-2 border-gray-700 focus:outline-none focus:border-b-2 focus:border-sky-500"
          />
        </div>
        <button className="relative w-full py-2 px-2 rounded-3xl border-solid border-2 border-sky-500 text-sky-500 font-semibold hover:bg-sky-500 hover:text-white hover:border-white">
          <MapPinIcon className="absolute w-5 h-5" />
          현위치로 주소 설정
        </button>
        <Link href="./find">
          <button className="relative w-full py-2 px-2 rounded-3xl border-solid border-2 border-sky-500 text-sky-500 font-semibold hover:bg-sky-500 hover:text-white hover:border-white">
            다음
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Location;
