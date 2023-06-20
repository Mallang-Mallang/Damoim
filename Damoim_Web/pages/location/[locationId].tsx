import React, { useEffect, useState } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { gql, useQuery } from '@apollo/client';
import Link from 'next/link';

const MeetingQuery = gql`
  query Meeting($locationId: Int!) {
    meeting(locationId: $locationId) {
      id
      createdAt
      title
      category
      location
      lat
      lng
      meetingDate
      author {
        name
      }
    }
  }
`;

const locationId = () => {
  const router = useRouter();
  const locationId = Number(router.query.locationId);

  const { loading, error, data } = useQuery(MeetingQuery, {
    variables: { locationId },
    skip: isNaN(locationId),
  });

  const [state, setState]: any = useState({
    // 지도의 초기 위치
    center: { lat: 37.40326558195946, lng: 126.93068622168563 },
    // 지도 위치 변경시 panto를 이용할지(부드럽게 이동)
    isPanto: true,
    errMsg: null,
    isLoading: true,
  });
  useEffect(() => {
    if (!isNaN(locationId) && data) {
      setState({
        ...state,
        center: { lat: data.meeting.lat, lng: data.meeting.lng },
      });
    }
  }, [locationId, data]);
  console.log(data);
  return data ? (
    <div className="flex-col w-full h-full justify-center items-center">
      <div className=" w-full h-fit">
        <div className="w-full  flex justify-center items-center bg-white py-5">
          <div className="flex flex-col w-full justify-center items-center">
            <h1 className="text-[32px] font-bold">{data.meeting.title}</h1>
            <h2 className="text-[20px] font-semibold">
              {data.meeting.location}
            </h2>
            <p className="text-[#666666]">
              일시 :{' '}
              {data.meeting.meetingDate.replaceAll('-', '.').slice(0, 10) +
                ' ' +
                data.meeting.meetingDate.slice(11, 16)}
            </p>
          </div>
        </div>

        {/* <div className="w-full h-[100px] flex justify-around items-center bg-white">
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
        </div> */}
      </div>
      <div className="w-full h-fit">
        <Map // 지도를 표시할 Container
          center={state.center}
          isPanto={state.isPanto}
          style={{
            // 지도의 크기
            width: '100%',
            height: '65vh',
          }}
          level={3} // 지도의 확대 레벨
        >
          <MapMarker position={state.center} />

          <CustomOverlayMap position={state.center} yAnchor={1}>
            <div className="flex relative bottom-[45px] rounded-lg overflow-hidden">
              <Link
                href={`/meetingInfo/${data.meeting.id}`}
                rel="noreferrer"
                className="flex"
              >
                <div className="flex justify-center items-center bg-white pl-2 pr-[15px] py-[10px] text-[14px] font-bold">
                  {data.meeting.location}
                </div>
                <div className='flex bg-[#d95050] bg-[url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png")] bg-no-repeat bg-center w-6'></div>
              </Link>
            </div>
            <div className='absolute ml-[-12px] left-[50%] bottom-[33px] w-[22px] h-[12px] content-[" "] bg-[url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png")]'></div>
          </CustomOverlayMap>
        </Map>
      </div>
    </div>
  ) : null;
};

export default locationId;
