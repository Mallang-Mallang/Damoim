import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';

const location = () => {
  const [state, setState]: any = useState({
    // 지도의 초기 위치
    center: { lat: 37.40326558195946, lng: 126.93068622168563 },
    // 지도 위치 변경시 panto를 이용할지(부드럽게 이동)
    isPanto: true,
    errMsg: null,
    isLoading: true,
  });
  return (
    <div className="flex-col justify-center items-center h-full">
      <div className="absolute w-[500px] top-[60px] z-10">
        <div className="w-full h-[80px] flex justify-center items-center bg-white">
          <h1 className="text-[32px] font-bold">대림대학교</h1>
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
      </div>
      <div className="w-full h-full">
        <div className="bg-gray-200 overflow-clip">
          <Map // 지도를 표시할 Container
            center={state.center}
            isPanto={state.isPanto}
            style={{
              // 지도의 크기
              width: '100%',
              height: '86vh',
            }}
            level={3} // 지도의 확대 레벨
          />
        </div>
      </div>
    </div>
  );
};

export default location;
