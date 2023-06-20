import Image from 'next/image';
import { useSession } from 'next-auth/react';

function Notification() {
  const { data: session } = useSession();
  console.log(session);
  return (
    <div className="flex items-center w-full h-[100px] p-3 ">
      <Image
        src={session?.user?.image!}
        width={50}
        height={50}
        className="border rounded-full m-3"
        alt="profile"
      />

      <div className="flex flex-col justify-around w-full h-full">
        {session?.user?.name}님이 모임을 추가했습니다.
        <br />
        <span className="text-xs text-gray-500">35분 전</span>
      </div>
    </div>
  );
}

export default Notification;
