import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/router';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import moment from 'moment';
import 'react-calendar/dist/Calendar.css';
import dynamic from 'next/dynamic';
import styled from 'styled-components';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import { useSession } from 'next-auth/react';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';

const SearchMeetingsQuery = gql`
  query SearchMeetings($category: String!, $meetingDate: String!) {
    searchMeetings(category: $category, meetingDate: $meetingDate) {
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
        image
      }
    }
  }
`;

const meeting2 = () => {
  const { data: session, status } = useSession();
  const [value, onChange] = useState();
  const [isClicked, setIsClicked] = useState(false);
  const router = useRouter();
  const { datas }: any = router.query;

  let currentDatas = JSON.parse(datas);
  delete currentDatas.lat;
  delete currentDatas.lng;
  console.log(currentDatas);
  const { loading, error, data } = useQuery(SearchMeetingsQuery, {
    variables: {
      category: currentDatas.category,
      meetingDate: currentDatas.meetingDate,
    },
    // skip: session?.user?.email === undefined,
  });

  // useEffect(() => {
  //   onChange(new Date());
  // }, []);

  const [state, setState]: any = useState({
    // 지도의 초기 위치
    center: { lat: 37.508908482648, lng: 126.891312500851 },
    // 지도 위치 변경시 panto를 이용할지(부드럽게 이동)
    isPanto: true,
    errMsg: null,
    isLoading: true,
  });
  let centerLat = 0;
  let centerLng = 0;
  let centerCount = 0;

  useEffect(() => {
    if (data) {
      data.searchMeetings.map((v: any, i: number) => {
        centerLat += v.lat;
        centerLng += v.lng;
        centerCount++;
      });

      setState({
        ...state,
        center: {
          lat: centerLat / centerCount,
          lng: centerLng / centerCount,
        },
      });
    }
  }, [data]);
  console.log(loading);
  console.log(data);

  return !loading && data ? (
    <div className="h-full overflow-hidden flex flex-col justify-between">
      <div>
        <Map // 지도를 표시할 Container
          center={state.center}
          isPanto={state.isPanto}
          style={{
            // 지도의 크기
            width: '100%',
            height: '50vh',
          }}
          level={9} // 지도의 확대 레벨
        >
          {/* {dummy.map((marker: any) => (
            <MapMarker
              key={`marker-${marker.content}-${marker.position.lat},${marker.position.lng}`}
              position={marker.position}
            ></MapMarker>
          ))} */}
          {data.searchMeetings.map((v: any, i: number) => (
            <div key={i}>
              {/* <MarkerWithCustomOverlayStyle /> */}
              <MapMarker
                position={{ lat: v.lat.toString(), lng: v.lng.toString() }}
              />
              <CustomOverlayMap
                position={{ lat: v.lat.toString(), lng: v.lng.toString() }}
                yAnchor={1}
              >
                <div className="flex relative bottom-[45px] rounded-lg overflow-hidden">
                  <Link
                    href={`/meetingInfo/${v.id}`}
                    rel="noreferrer"
                    className="flex"
                  >
                    <div className="flex justify-center items-center bg-white px-[15px] py-[10px] text-[14px] font-bold">
                      {v.title}
                    </div>
                    <div className='flex bg-[#d95050] bg-[url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/arrow_white.png")] bg-no-repeat bg-center w-6'></div>
                  </Link>
                </div>
                <div className='absolute ml-[-12px] left-[50%] bottom-[33px] w-[22px] h-[12px] content-[" "] bg-[url("https://t1.daumcdn.net/localimg/localimages/07/mapapidoc/vertex_white.png")]'></div>
              </CustomOverlayMap>
            </div>
          ))}
        </Map>
      </div>
      {/* <div
        className={`w-full shadow-top-xl p-5 pb-0 bg-white z-10 duration-500 ${
          isClicked
            ? '-translate-y-80 h-[550px] mb-[-320px] overflow-y-scroll'
            : 'h-[350px] overflow-hidden hover:mt-[-10px]'
        }`}
      > */}
      {/* <div
          className="flex justify-between items-center hover:cursor-pointer"
          onClick={() => setIsClicked(!isClicked)}
        >
          <div className="font-semibold text-[30px]">전체모임</div>
        </div>
        <div className="text-gray-500 my-5 flex justify-center">
          {moment(value).format('YYYY년 MM월 DD일')}
        </div> */}

      {/* {data?.searchMeetings.length !== 0 ? (
          data?.searchMeetings.map((v: any, i: number) => {
            return (
              <div
                className="border w-full h-[145px] bg-[#EAF7FF] rounded-[40px] px-5 py-11 mb-3 flex justify-between items-center text-lg"
                key={i}
              >
                <div>{v.meetingDate.slice(11, 16)}</div>
                <div className="mx-3 w-full">
                  <div className="font-semibold">{v.title}</div>
                  <div>{v.location}</div>
                </div>
                <ArrowLongRightIcon width={30} height={30} />
              </div>
            );
          })
        ) : (
          <div className="flex justify-center items-center text-gray-400 h-20">
            "아직 등록된 모임이 없습니다."
          </div>
        )} */}

      {/* <div className="border w-full h-[145px] bg-[#EAF7FF] rounded-[40px] px-5 py-11 mb-3 flex justify-between items-center text-lg">
          <div>1:00pm</div>
          <div className="mx-3 w-full">
            <div className="font-semibold">스터디 모임</div>
            <div>할리스 합정역</div>
          </div>
          <ArrowLongRightIcon width={30} height={30} />
        </div>

        <div className="border w-full h-[145px] bg-[#FFF0EA] rounded-[40px] px-5 py-11 mb-3 flex justify-between items-center text-lg">
          <div>1:00pm</div>
          <div className="mx-3 w-full">
            <div className="font-semibold">스터디 모임</div>
            <div>할리스 합정역</div>
          </div>
          <ArrowLongRightIcon width={30} height={30} />
        </div>

        <div className="border w-full h-[145px] bg-[#EAF7FF] rounded-[40px] px-5 py-11 mb-3 flex justify-between items-center text-lg">
          <div>1:00pm</div>
          <div className="mx-3 w-full">
            <div className="font-semibold">스터디 모임</div>
            <div>할리스 합정역</div>
          </div>
          <ArrowLongRightIcon width={30} height={30} />
        </div>

        <div className="border w-full h-[145px] bg-[#FFF0EA] rounded-[40px] px-5 py-11 mb-3 flex justify-between items-center text-lg">
          <div>1:00pm</div>
          <div className="mx-3 w-full">
            <div className="font-semibold">스터디 모임</div>
            <div>할리스 합정역</div>
          </div>
          <ArrowLongRightIcon width={30} height={30} />
        </div> */}
      {/* </div> */}
    </div>
  ) : null;
};

const dummy = [
  {
    position: { lat: '37.40326558195946', lng: '126.93068622168563' },
    content: '대림대학교',
  },
  {
    position: { lat: '37.4033257723772', lng: '126.931930810779' },
    content: '대림대학교 자동차관',
  },
  {
    position: { lat: '37.4018421834478', lng: '126.928028879906' },
    content: '대림대사거리',
  },
  {
    position: { lat: '37.4035519617969', lng: '126.930439738907' },
    content: '대림대학교 율곡관',
  },
  {
    position: { lat: '37.402037852438', lng: '126.929772520581' },
    content: '대림대학교 홍지관',
  },
  {
    position: { lat: '37.4033437953832', lng: '126.931935312243' },
    content: '대림대학교 자동차과',
  },
  {
    position: { lat: '37.4040746596671', lng: '126.930619968155' },
    content: '대림대학교 전산관',
  },
  {
    position: { lat: '37.4046373496203', lng: '126.93139651863' },
    content: '대림대학교 다산관',
  },
  {
    position: { lat: '37.4033178292142', lng: '126.930665843615' },
    content: '대림대학교 퇴계관',
  },
  {
    position: { lat: '37.4031071952449', lng: '126.93257817660394' },
    content: '나이스헤어 대림대점',
  },
  {
    position: { lat: '37.4028856035323', lng: '126.931118015817' },
    content: '대림대학교 대운동장',
  },
  {
    position: { lat: '37.4024198716651', lng: '126.929749575512' },
    content: '대림대학교 주차장3',
  },
  {
    position: { lat: '37.4030721163179', lng: '126.929590845332' },
    content: '대림대학교 정보통신관',
  },
  {
    position: { lat: '37.4048856148213', lng: '126.930682470453' },
    content: '대림대학교 수암관',
  },
  {
    position: { lat: '37.4022030919385', lng: '126.928855273568' },
    content: '대림대학교 한림관',
  },
];

export default meeting2;
