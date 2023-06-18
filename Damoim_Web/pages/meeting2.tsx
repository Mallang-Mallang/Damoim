import React, { useState } from 'react';
import { Map } from 'react-kakao-maps-sdk';

const meeting2 = () => {
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

export default meeting2;
