import {
  HomeIcon,
  StarIcon,
  MagnifyingGlassIcon,
  UserGroupIcon,
  UserIcon,
} from '@heroicons/react/24/outline';
import Link from 'next/link';
import { useRouter } from 'next/router';

const Footer = () => {
  const router = useRouter();
  const tabbarList = [
    { id: 0, route: '/', icon: HomeIcon, tabbarName: '홈' },
    {
      id: 1,
      route: '/Location',
      icon: MagnifyingGlassIcon,
      tabbarName: '위치',
    },
    { id: 2, route: '/Meeting', icon: UserGroupIcon, tabbarName: '모임' },
    { id: 3, route: '/Mypage', icon: UserIcon, tabbarName: '마이페이지' },
  ];
  return (
    <div className="flex justify-around w-[500px] h-[65px] fixed bottom-0 left-0 right-0 ml-auto mr-auto z-10 border-t border-gray-400 bg-white">
      {tabbarList.map((v, i) => {
        const ActiveComponents = v.icon;
        return (
          <Link
            className="flex flex-col justify-center items-center hover:text-orange-500 cursor-pointer"
            href={v.route}
            key={i}
          >
            <ActiveComponents
              className={`w-5 h-5 ${
                router.pathname === `${v.route}` ? 'text-orange-500' : null
              }`}
            />
            <h4
              className={`mt-[2px] ${
                router.pathname === `${v.route}` ? 'text-orange-500' : null
              }`}
            >
              {v.tabbarName}
            </h4>
          </Link>
        );
      })}
    </div>
  );
};

export default Footer;
