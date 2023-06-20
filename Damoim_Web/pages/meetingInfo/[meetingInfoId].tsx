import React, { useEffect, useState } from 'react';
import { Map, MapMarker } from 'react-kakao-maps-sdk';
import { ChevronLeftIcon, ChevronRightIcon } from '@heroicons/react/24/outline';
import { useRouter } from 'next/router';
import { gql, useMutation, useQuery } from '@apollo/client';
import { useSession } from 'next-auth/react';

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
        email
      }
      requests {
        id
        requestName
        requestEmail
        confirm
      }
    }
  }
`;

const RequestMeetingMutation = gql`
  mutation RequestMeeting(
    $meetingId: Int!
    $requestName: String!
    $requestEmail: String!
  ) {
    requestMeeting(
      meetingId: $meetingId
      requestName: $requestName
      requestEmail: $requestEmail
    ) {
      id
      createdAt
      meetingId
      meeting {
        id
        title
      }
      requestName
      requestEmail
      confirm
    }
  }
`;
const ConfirmRequestMutation = gql`
  mutation ConfrimRequest($requestId: Int!, $confirm: Boolean!) {
    confrimRequest(requestId: $requestId, confirm: $confirm) {
      id
      meetingId
      requestName
      requestEmail
      confirm
    }
  }
`;
const DeleteRequestMutation = gql`
  mutation DeleteRequest($requestId: Int!, $requestEmail: String!) {
    deleteRequest(requestId: $requestId, requestEmail: $requestEmail) {
      id
      createdAt
      meetingId
      requestName
      requestEmail
      confirm
    }
  }
`;

const meetingInfoId = () => {
  const { data: session, status } = useSession();
  const router = useRouter();
  const meetingId = Number(router.query.meetingInfoId);
  const [isRequested, setIsRequested] = useState(false);
  const { loading, error, data } = useQuery(MeetingQuery, {
    variables: { locationId: meetingId },
    skip: isNaN(meetingId),
  });
  const [confirmRequest] = useMutation(ConfirmRequestMutation, {
    refetchQueries: ['Meeting'],
  });
  const [deleteRequest] = useMutation(DeleteRequestMutation, {
    refetchQueries: ['Meeting'],
  });
  const [requestMeeting] = useMutation(RequestMeetingMutation, {
    refetchQueries: ['Meeting'],
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
    if (!isNaN(meetingId) && data) {
      setState({
        ...state,
        center: { lat: data.meeting.lat, lng: data.meeting.lng },
      });
    }
  }, [meetingId, data]);
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
            <p className="text-[#666666]">
              생성자 : {data.meeting.author.name}
            </p>
          </div>
        </div>
      </div>
      <div className="w-full h-fit">
        <Map // 지도를 표시할 Container
          center={state.center}
          isPanto={state.isPanto}
          style={{
            // 지도의 크기
            width: '100%',
            height: '25vh',
          }}
          level={3} // 지도의 확대 레벨
        >
          <MapMarker position={state.center}></MapMarker>
        </Map>
      </div>
      {data.meeting.author.email === session?.user?.email && (
        <>
          <div className="flex justify-between items-center px-5 py-3 sticky top-0 bg-[#f7f7f7] shadow-bottom-md">
            <h1 className="text-xl font-semibold">모임 요청</h1>
          </div>
          <div className="w-full flex flex-wrap justify-between divide-y">
            {data.meeting.requests.filter((e: any) => e.confirm === false)
              .length !== 0 ? (
              data.meeting.requests.map((v: any, i: number) => {
                if (v.confirm === false) {
                  return (
                    <div
                      key={i}
                      className="w-full px-5 bg-white hover:bg-[#eeeeee]"
                    >
                      <div className="w-full h-fit flex justify-between items-center space-x-2 py-3">
                        <div className="flex items-center text-sm gap-x-1">
                          <div className="flex font-semibold">
                            요청자 :{' '}
                            <div className="font-normal">{v.requestName}</div>
                          </div>
                          <div className="text-[#666666]">
                            ({v.requestEmail})
                          </div>
                        </div>
                        <div className="flex gap-2">
                          <div
                            className="flex px-2 rounded-lg bg-[#58b7ff] hover:bg-[#44aeff] text-white hover:cursor-pointer"
                            onClick={() => {
                              confirmRequest({
                                variables: { requestId: v.id, confirm: true },
                              });
                            }}
                          >
                            수락
                          </div>

                          <div
                            className="flex px-2 rounded-lg bg-[#ff5050] hover:bg-[#fe3838] text-white hover:cursor-pointer"
                            onClick={() => {
                              if (confirm('요청을 삭제하시겠습니까?')) {
                                deleteRequest({
                                  variables: {
                                    requestId: v.id,
                                    requestEmail: v.requestEmail,
                                  },
                                });
                              }

                              confirmRequest({
                                variables: { requestId: v.id, confirm: false },
                              });
                            }}
                          >
                            거절
                          </div>
                        </div>
                      </div>
                    </div>
                  );
                }
              })
            ) : (
              <div className="flex w-full justify-center items-center text-gray-400 h-14">
                "아직 요청한 참가자가 없습니다."
              </div>
            )}
          </div>
        </>
      )}
      <div className="flex justify-between items-center px-5 py-3 sticky top-0 bg-[#f7f7f7] shadow-bottom-md">
        <h1 className="text-xl font-semibold">모임 참가자</h1>

        {data.meeting.author.email !== session?.user?.email &&
          data.meeting.requests.filter(
            (e: any) => e.requestEmail === session?.user?.email,
          ).length === 0 && (
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
          )}
      </div>
      <div className="w-full flex flex-wrap justify-between divide-y">
        {data.meeting.requests.filter((e: any) => e.confirm === true).length !==
        0 ? (
          data.meeting.requests.map((v: any, i: number) => {
            if (v.confirm === true) {
              return (
                <div
                  key={i}
                  className="w-full px-5 bg-white hover:bg-[#eeeeee]"
                >
                  <div className="w-full h-fit flex justify-between items-center space-x-2 py-3">
                    <div className="flex items-center text-sm gap-x-1">
                      <div className="flex font-semibold">
                        참가자 :{' '}
                        <div className="font-normal">{v.requestName}</div>
                      </div>
                      <div className="text-[#666666]">({v.requestEmail})</div>
                    </div>
                    <div className="flex gap-2">
                      {data.meeting.author.email === session?.user?.email ? (
                        <div
                          className="flex px-2 rounded-lg bg-[#ff5050] hover:bg-[#fe3838] text-white hover:cursor-pointer"
                          onClick={() => {
                            confirmRequest({
                              variables: { requestId: v.id, confirm: false },
                            });
                          }}
                        >
                          거절
                        </div>
                      ) : null}
                    </div>
                  </div>
                </div>
              );
            }
          })
        ) : (
          <div className="flex w-full justify-center items-center text-gray-400 h-14">
            {session?.user?.email === data.meeting.author.email
              ? '아직 수락한 참가자가 없습니다.'
              : '아직 등록된 참가자가 없습니다.'}
          </div>
        )}
      </div>
    </div>
  ) : null;
};

export default meetingInfoId;
