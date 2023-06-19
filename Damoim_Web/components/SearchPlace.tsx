import React, { useState } from 'react';
import { MagnifyingGlassIcon } from '@heroicons/react/24/solid';
import { MapPinIcon } from '@heroicons/react/24/outline';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import Link from 'next/link';
import { useRouter } from 'next/router';

function SearchPlace() {
  const router = useRouter();
  // const path = router.pathname === '/addSchedule' ? './find2' : '/meeting2'
  const [info, setInfo]: any = useState();
  const [markers, setMarkers]: any = useState([]);
  const [state, setState]: any = useState({
    // 지도의 초기 위치
    center: { lat: 37.40326558195946, lng: 126.93068622168563 },
    // 지도 위치 변경시 panto를 이용할지(부드럽게 이동)
    isPanto: true,
    errMsg: null,
    isLoading: true,
  });
  const [searchAddress, SetSearchAddress] = useState();
  const [meetingTitle, setMeetingTitle] = useState();

  const currentDateTime = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000,
  )
    .toISOString()
    .slice(0, 16);

  const currentDate = new Date(
    new Date().getTime() - new Date().getTimezoneOffset() * 60000,
  )
    .toISOString()
    .slice(0, 10);

  const [dateTime, setDateTime] = useState(currentDateTime);
  const [date, setDate] = useState(currentDate);

  const datas = {
    title: meetingTitle,
    meetingDate: router.pathname === '/addSchedule' ? dateTime : date,
    location: info,
    lat: state.center.lat,
    lng: state.center.lng,
  };

  function setMinValue(e: any) {
    if (e.target.value < currentDate) {
      alert('현재 날짜보다 이전의 날짜는 설정할 수 없습니다.');
    }
    if (router.pathname === '/addSchedule') {
      setDateTime(e.target.value);
      e.target.value = dateTime;
    } else {
      setDate(e.target.value);
      e.target.value = date;
    }
  }

  function getMeetingTitle(e: any) {
    setMeetingTitle(e.target.value);
    console.log(meetingTitle);
  }

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
        console.log(markers);
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
  const geoLocation = (e: any) => {
    if (navigator.geolocation) {
      // GeoLocation을 이용해서 접속 위치를 얻어옵니다
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setState((prev: any) => ({
            ...prev,
            center: {
              lat: position.coords.latitude, // 위도
              lng: position.coords.longitude, // 경도
            },
            isLoading: false,
          }));
        },
        (err) => {
          setState((prev: any) => ({
            ...prev,
            errMsg: err.message,
            isLoading: false,
          }));
        },
      );
    } else {
      // HTML5의 GeoLocation을 사용할 수 없을때 마커 표시 위치와 인포윈도우 내용을 설정합니다
      setState((prev: any) => ({
        ...prev,
        errMsg: 'geolocation을 사용할수 없어요..',
        isLoading: false,
      }));
    }
  };

  function exeption() {
    if (!info) {
      router.reload();
      alert('위치를 설정해주세요.');
    } else if (!meetingTitle && router.pathname === '/addSchedule') {
      router.reload();
      alert('모임명을 입력해주세요.');
    } else if (!date) {
      router.reload();
      alert('모임 시간을 설정해주세요.');
    }
  }

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
          {!state.isLoading && <MapMarker position={state.center}></MapMarker>}
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
      <div className="w-full">
        {router.pathname === '/addSchedule' && (
          <>
            <p>모임명</p>
            <input
              type="text"
              placeholder="모임명을 입력하세요."
              className="w-full bg-transparent placeholder-gray-700 py-2 px-2 mb-5 border-b-2 border-gray-700 focus:outline-none focus:border-b-2 focus:border-sky-500"
              onChange={getMeetingTitle}
            />
          </>
        )}
        <p>모임 시간</p>
        <div>
          <input
            className="w-full bg-transparent placeholder-gray-700 py-2 px-2 mb-5 border-b-2 border-gray-700 focus:outline-none focus:border-b-2 focus:border-sky-500"
            type={`${
              router.pathname === '/addSchedule' ? 'datetime-local' : 'date'
            }`}
            min={
              router.pathname === '/addSchedule' ? currentDateTime : currentDate
            }
            onChange={setMinValue}
          />
        </div>
      </div>

      <button
        className="relative w-full py-2 px-2 rounded-3xl border-solid border-2 border-sky-500 text-sky-500 font-semibold hover:bg-sky-500 hover:text-white hover:border-white"
        onClick={geoLocation}
      >
        <MapPinIcon className="absolute w-5 h-5" />
        현위치로 주소 설정
      </button>
      <Link
        href={{
          pathname: router.pathname === '/addSchedule' ? '/find2' : '/meeting2', // 라우팅 id
          query: { datas: JSON.stringify(datas) }, // props
        }}
        as={router.pathname === '/addSchedule' ? '/find2' : '/meeting2'} //url에 표시할 query
      >
        <button
          className="relative w-full py-2 px-2 rounded-3xl border-solid border-2 border-sky-500 text-sky-500 font-semibold hover:bg-sky-500 hover:text-white hover:border-white"
          onClick={exeption}
        >
          다음
        </button>
      </Link>
    </>
  );
}

export default SearchPlace;
