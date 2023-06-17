import SearchPlace from '@/components/SearchPlace';
import Link from 'next/link';

const Location = () => {
  return (
    <div className="w-full h-full px-4 py-5 overflow-auto">
      <div className="inner flex flex-col gap-8">
        <h1 className="text-xl font-semibold">
          출발위치를 <br />
          설정해주세요.
        </h1>
        <SearchPlace />
        <Link href="./find">
          <button className="relative w-full py-2 px-2 rounded-3xl border-solid border-2 border-sky-500 text-sky-500 font-semibold hover:bg-sky-500 hover:text-white hover:border-white">
            다음
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Location;
