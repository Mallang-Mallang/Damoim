import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import React, { useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function SearchPlace() {
  const [info, setInfo] = useState();
  const [markers, setMarkers]: any = useState([]);
  const [map, setMap] = useState();
  const [place, setPlace] = useState();
  const [state, setState]: any = useState({
    // 지도의 초기 위치
    center: { lat: 37.40326558195946, lng: 126.93068622168563 },
    // 지도 위치 변경시 panto를 이용할지(부드럽게 이동)
    isPanto: true,
  });
  const [searchAddress, SetSearchAddress] = useState();

  // 키워드 입력후 검색 클릭 시 원하는 키워드의 주소로 이동
  const SearchMap = () => {
    const ps = new kakao.maps.services.Places();
    const placesSearchCB = function (data: any, status: any, pagination: any) {
      if (status === kakao.maps.services.Status.OK) {
        const newSearch = data[0];
        setState({
          center: { lat: newSearch.y, lng: newSearch.x },
        });
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정하기위해
        // LatLngBounds 객체에 좌표를 추가합니다
        const bounds = new kakao.maps.LatLngBounds();
        let markers = [];

        for (var i = 0; i < data.length; i++) {
          // @ts-ignore
          markers.push({
            position: {
              lat: data[i].y,
              lng: data[i].x,
            },
            content: data[i].place_name,
          });
          // @ts-ignore
          bounds.extend(new kakao.maps.LatLng(data[i].y, data[i].x));
        }
        setMarkers(markers);
        console.log(info);
        // 검색된 장소 위치를 기준으로 지도 범위를 재설정합니다
      }
    };
    ps.keywordSearch(`${searchAddress}`, placesSearchCB);
  };

  const handleSearchAddress = (e: any) => {
    SetSearchAddress(e.target.value);
  };

  const onSubmitSearch = (e: any) => {
    if (e.key === 'Enter') {
      SearchMap();
    }
  };

  return (
    <>
      <div className="flex relative w-full bg-transparent">
        <MagnifyingGlassIcon className="absolute w-5 h-5 top-1/4 left-2" />
        <input
          type="text"
          placeholder="도로명, 건물명 또는 지번으로 검색"
          className="w-full pl-8 py-2 pr-2 rounded-3xl bg-gray-200 placeholder-gray-400"
          onChange={handleSearchAddress}
          onKeyDown={onSubmitSearch}
        />
        <button className="absolute right-3 top-2" onClick={SearchMap}>
          검색
        </button>
      </div>
      <div className="bg-gray-200 overflow-clip">
        <Map // 지도를 표시할 Container
          center={state.center}
          isPanto={state.isPanto}
          style={{
            // 지도의 크기
            width: '100%',
            height: '300px',
          }}
          level={3} // 지도의 확대 레벨
        >
          {markers.map((marker: any) => (
            <MapMarker
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
              position={marker.position}
              onClick={() => setInfo(marker)}
            >
              {info && info.content === marker.content && (
                <div className="text-black">{marker.content}</div>
              )}
            </MapMarker>
          ))}
        </Map>
      </div>
    </>
  );
}

export default SearchPlace;
