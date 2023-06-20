import { gql, useQuery } from '@apollo/client';
import React from 'react';
const MyRequestQuery = gql`
  query MyRequest($userEmail: String!) {
    myRequests(userEmail: $userEmail) {
      meeting {
        id
      }
    }
  }
`;
const RequestMeeting = (props: any) => {
  // console.log(props.session);
  // console.log(props.meetingId);
  const { loading, error, data } = useQuery(MyRequestQuery, {
    variables: { userEmail: props.session?.user?.email },
  });
  console.log(data);
  return data ? (
    <div className="flex justify-between items-center px-5 py-3 sticky top-0 bg-[#f7f7f7] shadow-bottom-md">
      <h1 className="text-xl font-semibold">모임 참가자</h1>
      <div
        className="rounded-full bg-[#58b7ff] text-white p-2 hover:cursor-pointer hover:bg-[#44aeff]"
        // onClick={() =>
        //   requestMeeting({
        //     variables: {
        //       meetingId: data?.meeting.id,
        //       requestName: session?.user?.name,
        //       requestEmail: session?.user?.email,
        //     },
        //   })
        // }
      >
        참가 요청
      </div>
      {/* {
        !data.myRequests.map((v: any, i: number) => {
          console.log(v.meeting.id !== props.meetingId);
          if (v.meeting.id !== props.meetingId)
            return (
             
            );
        })
      } */}
      {/* {data.meeting.requests.map((v: any, i: number) => {
    if (v.requestEmail === session?.user?.email && v.confirm) {
      return (
        <div
          className="rounded-full bg-[#b1b1b1] text-white p-2 "
          key={i}
        >
          요청 승인
        </div>
      );
    } else if (v.requestEmail === session?.user?.email && !v.confirm) {
      console.log(v.requestEmail === session?.user?.email && !v.confirm);
      return (
        <div
          className="rounded-full bg-[#b1b1b1] text-white p-2 "
          key={i}
        >
          승인 대기 중
        </div>
      );
    } else {
      console.log(v.requestEmail === session?.user?.email && v.confirm);
      return (
        <div
          className="rounded-full bg-[#58b7ff] text-white p-2 hover:cursor-pointer hover:bg-[#44aeff]"
          onClick={() =>
            requestMeeting({
              variables: {
                meetingId: data?.meeting.id,
                requestName: session?.user?.name,
                requestEmail: session?.user?.email,
              },
            })
          }
        >
          참가 요청
        </div>
      );
    }
  })} */}
    </div>
  ) : null;
};

export default RequestMeeting;
