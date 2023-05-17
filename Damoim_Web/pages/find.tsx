import { ReactElement, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
    <div className="px-5 h-910px bg-white py-5 box-border">
      <div className="flex justify-between items-center mb-[50px]">
        <h1 className="text-[30px] font-semibold">
          이동수단을
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
        <Link href="./find2">
          <button className="relative w-full py-2 bg-sky-400 rounded-xl">
            <span className="text-cloud-500 font-semibold text-slate-50">
              다음
            </span>
          </button>
        </Link>
      </div>
    </div>
  );
};
export default Find;

const txp = [
  {
    id: 0,
    title: '도보',
    icon: '/icon/walk.png',
    selected: false,
  },
  {
    id: 1,
    title: '자전거',
    icon: '/icon/bicycle.png',
    selected: false,
  },
  {
    id: 2,
    title: '자가용',
    icon: '/icon/car.png',
    selected: false,
  },
  {
    id: 3,
    title: '택시',
    icon: '/icon/taxi.png',
    selected: false,
  },
  {
    id: 4,
    title: '버스',
    icon: '/icon/bus.png',
    selected: false,
  },
  {
    id: 5,
    title: '지하철',
    icon: '/icon/subway.png',
    selected: false,
  },
];
