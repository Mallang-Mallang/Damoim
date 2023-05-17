import React, { useCallback, useEffect, useRef, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';

function getAPITest() {
  const Main = () => {
    const mapRef = useRef();
    const [info, setInfo] = useState();

    return (
      <>
        <Map // 지도를 표시할 Container
          center={{ lat: 33.452613, lng: 126.570888 }}
          style={{
            // 지도의 크기
            width: '100%',
            height: '450px',
          }}
          level={3} // 지도의 확대 레벨
          ref={mapRef}
        >
          <button
            onClick={() => {
              const map = mapRef.current;
              setInfo({
                center: {
                  lat: map.getCenter().getLat(),
                  lng: map.getCenter().getLng(),
                },
                level: map.getLevel(),
                typeId: map.getMapTypeId(),
                swLatLng: {
                  lat: map.getBounds().getSouthWest().getLat(),
                  lng: map.getBounds().getSouthWest().getLng(),
                },
                neLatLng: {
                  lat: map.getBounds().getNorthEast().getLat(),
                  lng: map.getBounds().getNorthEast().getLng(),
                },
              });
            }}
          >
            정보 가져 오기!
          </button>
          {info && (
            <div>
              <p>위도 : {info.center.lat}</p>
              <p>경도 : {info.center.lng}</p>
              <p>레벨 : {info.level}</p>
              <p>타입 : {info.typeId}</p>
              <p>
                남서쪽 좌표 : {info.swLatLng.lat}, {info.swLatLng.lng}
              </p>
              <p>
                북동쪽 좌표 : {info.neLatLng.lat}, {info.neLatLng.lng}
              </p>
              {console.log(info)}
            </div>
          )}
        </Map>
      </>
    );
  };
  return <Main />;
}

export default getAPITest;
