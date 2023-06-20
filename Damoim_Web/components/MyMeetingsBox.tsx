import { gql, useQuery } from '@apollo/client';
import { ArrowLongRightIcon } from '@heroicons/react/24/solid';
import moment from 'moment';
import Link from 'next/link';
import React, { useState } from 'react';

const MyMeetingsQuery = gql`
  query MyMeetings($userEmail: String!, $date: String!) {
    myMeetings(userEmail: $userEmail, date: $date) {
      id
      createdAt
      title
      category
      location
      meetingDate
      author {
        name
      }
    }
  }
`;

const MyMeetingsBox = ({ value, session }: any) => {
  const [isClicked, setIsClicked] = useState(false);
  const { loading, error, data } = useQuery(MyMeetingsQuery, {
    variables: {
      userEmail: session.user.email,
      date: moment(value).format('YYYY-MM-DD'),
    },
    skip: session.user.email === undefined,
  });
  return (
    <div
      className={`w-full shadow-top-xl p-5 pb-0 bg-white z-10 duration-500  ${
        isClicked
          ? '-translate-y-80 h-[700px] mb-[-320px] overflow-scroll'
          : 'h-[500px] overflow-hidden hover:mt-[-10px]'
      }`}
    >
      <div className="flex justify-between items-center">
        <div
          className="font-semibold text-[30px] hover:cursor-pointer"
          onClick={() => setIsClicked(!isClicked)}
        >
          전체모임
        </div>
        <Link
          href="./addSchedule"
          className="border border-[#43ABE5] text-[#43ABE5] w-[140px] h-10 rounded-full flex justify-center items-center font-semibold hover:cursor-pointer hover:bg-[#43ABE5] hover:text-white"
        >
          일정추가
        </Link>
      </div>
      <div className="text-gray-500 my-5 flex justify-center">
        {moment(value).format('YYYY년 MM월 DD일')}
      </div>

      {data?.myMeetings.length !== 0 ? (
        data?.myMeetings.map((v: any, i: number) => {
          return (
            <Link
              href={`/meetingInfo/${v.id}`}
              className="border w-full h-[145px] bg-[#EAF7FF] rounded-[40px] px-5 py-11 mb-3 flex justify-between items-center text-lg"
              key={i}
            >
              <div>{v.meetingDate.slice(11, 16)}</div>
              <div className="mx-3 w-full">
                <div className="font-semibold">{v.title}</div>
                <div>{v.location}</div>
              </div>
              <ArrowLongRightIcon width={30} height={30} />
            </Link>
          );
        })
      ) : (
        <div className="flex justify-center items-center text-gray-400 h-20">
          "아직 등록된 모임이 없습니다."
        </div>
      )}
    </div>
  );
};

export default MyMeetingsBox;
