import { ReactElement, useState } from 'react';
import Image from 'next/image';

const Find = () => {
  const [btn, setBtn] = useState(txp);

  const handleSelect = (id: number) => {
    const newBtn = btn.map((item) => {
      if (item.id === id || item.selected) {
        item.selected = !item.selected;
      }
      return item;
    });
    setBtn([...newBtn]);
  };

  return (
    <div className="px-5 h-910px bg-white py-16 box-border">
      <div className="flex justify-between items-center mb-[105px]">
        <h1 className="text-[30px] font-semibold">
          선호하는 스타일을
          <br />
          선택해주세요.
        </h1>
      </div>
      <div className="flex flex-col gap-y-5">
        <div className="grid grid-cols-3 grid-rows-2 gap-y-5 gap-x-5">
          {btn.map((item, index) => (
            <button
              key={index}
              className={`flex flex-col justify-center items-center rounded-xl py-2 hover:bg-sky-400 hover:text-slate-50  active:bg-sky-500 ${
                item.selected && 'bg-sky-400'
              } `}
              onClick={() => handleSelect(item.id)}
            >
              <Image
                src={item.icon}
                alt={item.title}
                width={100}
                height={100}
              />
              <h3 className={`${item.selected && 'text-slate-50'}`}>
                {item.title}
              </h3>
            </button>
          ))}
        </div>
        <button className="relative w-full py-2 bg-sky-400 rounded-xl">
          <span className="text-cloud-500 font-semibold text-slate-50">
            완료
          </span>
        </button>
      </div>
    </div>
  );
};
export default Find;

const txp = [
  {
    id: 0,
    title: '스터디',
    icon: '/icon/book.png',
    selected: false,
  },
  {
    id: 1,
    title: '영화',
    icon: '/icon/popcorn.png',
    selected: false,
  },
  {
    id: 2,
    title: '맛집',
    icon: '/icon/restaurant.png',
    selected: false,
  },
  {
    id: 3,
    title: '산책',
    icon: '/icon/jogging.png',
    selected: false,
  },
  {
    id: 4,
    title: '전시',
    icon: '/icon/museum.png',
    selected: false,
  },
  {
    id: 5,
    title: '뮤지컬',
    icon: '/icon/concert.png',
    selected: false,
  },
  {
    id: 6,
    title: '쇼핑',
    icon: '/icon/shopping.png',
    selected: false,
  },
  {
    id: 7,
    title: '여행',
    icon: '/icon/travel.png',
    selected: false,
  },
  {
    id: 8,
    title: '운동',
    icon: '/icon/exercise.png',
    selected: false,
  },
  {
    id: 9,
    title: '게임',
    icon: '/icon/game.png',
    selected: false,
  },
  {
    id: 10,
    title: '키즈',
    icon: '/icon/kid.png',
    selected: false,
  },
  {
    id: 11,
    title: '그 외',
    icon: '/icon/dot.png',
    selected: false,
  },
];
