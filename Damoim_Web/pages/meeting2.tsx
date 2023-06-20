import React, { useEffect, useState } from 'react';
import { CustomOverlayMap, Map, MapMarker } from 'react-kakao-maps-sdk';
import 'react-calendar/dist/Calendar.css';
import Link from 'next/link';
import { gql, useQuery } from '@apollo/client';
import useStore from '@/store/useStore';
import Image from 'next/image';

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
  const { meetingDate, category }: any = useStore();

  const { loading, error, data } = useQuery(SearchMeetingsQuery, {
    variables: {
      category: category,
      meetingDate: meetingDate,
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
    <>
      <div className="flex-col w-full h-fit justify-center items-center">
        <div className=" w-full h-fit">
          <div className="w-full  flex justify-center items-center bg-white py-5">
            <div className="flex flex-col w-full justify-center items-center">
              <h1 className="text-[20px] font-bold">
                카테고리 :{' '}
                {txp.map((v: any, i: number) => {
                  if (v.title === data.searchMeetings[0].category) {
                    return v.name;
                  }
                })}
              </h1>
              <h2 className="text-[20px] font-semibold">
                검색된 모임 : {data.searchMeetings.length}개
              </h2>
              <p className="text-[#666666]">
                검색 날짜 :{' '}
                {data.searchMeetings[0].meetingDate
                  .replaceAll('-', '.')
                  .slice(0, 10) +
                  ' ' +
                  data.searchMeetings[0].meetingDate.slice(11, 16)}
              </p>
              <p className="text-[#666666]">
                {/* 생성자 : {data.meeting.author.name} */}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="h-fit overflow-hidden flex flex-col justify-between">
        <div>
          <Map // 지도를 표시할 Container
            center={state.center}
            isPanto={state.isPanto}
            style={{
              // 지도의 크기
              width: '100%',
              height: '67vh',
            }}
            level={9} // 지도의 확대 레벨
          >
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
                      <div className="bg-white flex justify-center items-center pl-2 w-8">
                        <Image
                          src={v.author.image}
                          alt="userProfile"
                          width={100}
                          height={100}
                          className="rounded-full"
                        />
                      </div>
                      <div className="flex justify-center items-center bg-white pl-2 pr-[15px] py-[10px] text-[14px] font-bold">
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
      </div>
    </>
  ) : null;
};

export default meeting2;

const txp = [
  {
    id: 0,
    name: '스터디',
    title: 'STUDY',
  },
  {
    id: 1,
    name: '영화',
    title: 'MOVIE',
  },
  {
    id: 2,
    name: '맛집',
    title: 'RESTAURANT',
  },
  {
    id: 3,
    name: '산책',
    title: 'WALKING',
  },
  {
    id: 4,
    name: '전시',
    title: 'EXHIBITION',
  },
  {
    id: 5,
    name: '뮤지컬',
    title: 'MUSICAL',
  },
  {
    id: 6,
    name: '쇼핑',
    title: 'SHOPPING',
  },
  {
    id: 7,
    name: '여행',
    title: 'TRAVELING',
  },
  {
    id: 8,
    name: '운동',
    title: 'SPORTS',
  },
  {
    id: 9,
    name: '게임',
    title: 'GAME',
  },
  {
    id: 10,
    name: '키즈',
    title: 'KIDS',
  },
  {
    id: 11,
    name: '그 외',
    title: 'OTHERS',
  },
];
