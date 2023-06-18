import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useRouter } from 'next/router';
import { useSession } from 'next-auth/react';

const Find2 = () => {
  const [btn, setBtn] = useState(txp);
  const [category, setCategory] = useState('');
  const { data: session } = useSession();

  const router = useRouter();
  const { datas }: any = router.query;
  const currentDatas = JSON.parse(datas);
  currentDatas['category'] = category;
  currentDatas['location'] = currentDatas.location.content;
  currentDatas['authorEmail'] = session?.user?.email;
  console.log(currentDatas);

  const handleSelect = (id: number) => {
    const newBtn = btn.map((item) => {
      if (item.id === id || item.selected) {
        item.selected = !item.selected;
      }
      if (item.selected) {
        setCategory(item.title);
      }
      return item;
    });
    setBtn([...newBtn]);
  };

  return (
    <div className="px-5 h-910px bg-white py-5 box-border">
      <div className="flex justify-between items-center mb-[50px]">
        <h1 className="text-[30px] font-semibold">
          모임 카테고리를
          <br />
          선택해주세요.
        </h1>
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="grid grid-cols-3 grid-rows-2 gap-y-5 gap-x-5">
          {btn.map((item) => (
            <button
              key={item.id}
              className={`flex flex-col justify-center items-center rounded-xl py-2 hover:bg-sky-400 hover:text-slate-50  active:bg-sky-500 ${
                item.selected && 'bg-sky-400'
              } `}
              onClick={() => handleSelect(item.id)}
            >
              <Image src={item.icon} alt={item.name} width={100} height={100} />
              <h3 className={`${item.selected && 'text-slate-50'}`}>
                {item.name}
              </h3>
            </button>
          ))}
        </div>
        <Link
          href="./location"
          className="flex justify-center items-center relative w-full py-2 bg-sky-400 rounded-xl text-cloud-500 font-semibold text-slate-50"
        >
          완료
        </Link>
      </div>
    </div>
  );
};
export default Find2;

// STUDY;
// MOVIE;
// RESTAURANT;
// WALKING;
// EXHIBITION;
// MUSICAL;
// SHOPPING;
// TRAVELING;
// SPORTS;
// GAME;
// KIDS;
// OTHERS;

const txp = [
  {
    id: 0,
    name: '스터디',
    title: 'STUDY',
    icon: '/icon/book.png',
    selected: false,
  },
  {
    id: 1,
    name: '영화',
    title: 'MOVIE',
    icon: '/icon/popcorn.png',
    selected: false,
  },
  {
    id: 2,
    name: '맛집',
    title: 'RESTAURANT',
    icon: '/icon/restaurant.png',
    selected: false,
  },
  {
    id: 3,
    name: '산책',
    title: 'WALKING',
    icon: '/icon/jogging.png',
    selected: false,
  },
  {
    id: 4,
    name: '전시',
    title: 'EXHIBITION',
    icon: '/icon/museum.png',
    selected: false,
  },
  {
    id: 5,
    name: '뮤지컬',
    title: 'MUSICAL',

    icon: '/icon/concert.png',
    selected: false,
  },
  {
    id: 6,
    name: '쇼핑',
    title: 'SHOPPING',
    icon: '/icon/shopping.png',
    selected: false,
  },
  {
    id: 7,
    name: '여행',
    title: 'TRAVELING',
    icon: '/icon/travel.png',
    selected: false,
  },
  {
    id: 8,
    name: '운동',
    title: 'SPORTS',
    icon: '/icon/exercise.png',
    selected: false,
  },
  {
    id: 9,
    name: '게임',
    title: 'GAME',
    icon: '/icon/game.png',
    selected: false,
  },
  {
    id: 10,
    name: '키즈',
    title: 'KIDS',
    icon: '/icon/kid.png',
    selected: false,
  },
  {
    id: 11,
    name: '그 외',
    title: 'OTHERS',
    icon: '/icon/dot.png',
    selected: false,
  },
];
