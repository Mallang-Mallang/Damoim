import SearchPlace from '@/components/SearchPlace';
import Link from 'next/link';

const meeting = () => {
  return (
    <div className="w-full h-full px-4 py-5 overflow-auto">
      <div className="inner flex flex-col gap-8">
        <h1 className="text-xl font-semibold">
          검색할 모임을 <br />
          설정해주세요.
        </h1>
        <SearchPlace />
      </div>
    </div>
  );
};

export default meeting;
