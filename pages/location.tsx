import Map from '@/components/common/Map';
import React from 'react';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const location = () => {
  return (
    <div className="flex-col justify-center items-center h-full">
      <div className="w-full h-[80px] flex justify-around items-center bg-white">
        <ChevronLeftIcon className="w-[50px] h-[50px] cursor-pointer hover:text-blue-700" />
        <h1 className="text-[32px] font-bold">대림대학교</h1>
        <ChevronRightIcon className="w-[50px] h-[50px] cursor-pointer hover:text-blue-700" />
      </div>

      <div className="w-full h-[128px] flex justify-around items-center bg-white">
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

      <Map latitude={37.403331351471266} longitude={126.93067769029214} />
    </div>
  );
};

export default location;
