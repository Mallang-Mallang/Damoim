import { gql, useMutation, useQuery } from '@apollo/client';
import Link from 'next/link';
import React from 'react';

const MyRequestQuery = gql`
  query MyRequest($userEmail: String!) {
    myRequests(userEmail: $userEmail) {
      id
      createdAt
      meetingId
      requestEmail
      confirm
      meeting {
        id
        title
        location
        meetingDate
        author {
          name
        }
      }
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

const MyRequest = ({ session }: any) => {
  const { loading, error, data } = useQuery(MyRequestQuery, {
    variables: { userEmail: session?.user?.email },
    skip: session?.user?.email === undefined,
  });
  const [deleteRequest] = useMutation(DeleteRequestMutation, {
    refetchQueries: ['MyRequest'],
  });

  return (
    <>
      <div className="flex justify-between items-center px-5 py-3 sticky top-0 bg-[#f7f7f7] shadow-y-md">
        <h1 className="text-2xl font-semibold ">나의 모임 요청</h1>
      </div>
      <div className="w-full flex flex-wrap justify-between divide-y">
        {data?.myRequests.length !== 0 ? (
          data?.myRequests.map((v: any, i: number) => {
            return (
              <div
                className="flex w-full px-5 justify-between items-center bg-white hover:bg-[#eeeeee] space-x-5"
                key={i}
              >
                <Link
                  href={`/meetingInfo/${v.meetingId}`}
                  key={i}
                  className="w-full"
                >
                  <div className="w-full h-fit flex-col justify-between items-center space-y-1 py-2">
                    <div className="font-semibold text-lg">
                      {v.meeting.title}
                    </div>
                    <div className="flex items-center gap-4 text-[#666666]">
                      <div className="text-sm">
                        {'위치 : ' + v.meeting.location}
                      </div>
                      <div className="text-sm">
                        {'일시 : ' +
                          v.meeting.meetingDate
                            .replaceAll('-', '.')
                            .slice(0, 10) +
                          ' ' +
                          v.meeting.meetingDate.slice(11, 16)}
                      </div>
                      <div className="text-sm">
                        요청 : {v.confirm === true ? '승인' : '거절'}
                      </div>
                    </div>
                  </div>
                </Link>
                <button
                  className="shrink-0 px-3 py-1 rounded-lg bg-[#ff5050] text-white"
                  onClick={() => {
                    if (confirm('정말로 모임을 취소하시겠습니까?')) {
                      deleteRequest({
                        variables: {
                          requestId: v.id,
                          requestEmail: v.requestEmail,
                        },
                      });
                    }
                  }}
                >
                  취소
                </button>
              </div>
            );
          })
        ) : (
          <div className="flex justify-center items-center w-full h-20 text-gray-500">
            "아직 등록된 모임이 없습니다."
          </div>
        )}
      </div>
    </>
  );
};

export default MyRequest;
