import {
  HomeIcon,
  MapPinIcon,
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
      route: '/meeting',
      icon: MapPinIcon,
      tabbarName: '모임 찾기',
    },
    { id: 2, route: '/add_schedule', icon: UserGroupIcon, tabbarName: '모임' },
    { id: 3, route: '/mypage', icon: UserIcon, tabbarName: '마이페이지' },
  ];
  return (
    <div className="flex justify-around w-[500px] h-[65px] fixed bottom-0 z-10 border-t border-gray-400 bg-white">
      {tabbarList.map((v, i) => {
        const ActiveComponents = v.icon;
        return (
          <Link
            className="flex flex-col justify-center items-center hover:text-sky-700 cursor-pointer"
            href={v.route}
            key={i}
          >
            <ActiveComponents
              className={`w-5 h-5 ${
                router.pathname === `${v.route}` ? 'text-sky-700' : null
              }`}
            />
            <h4
              className={`mt-[2px] ${
                router.pathname === `${v.route}` ? 'text-sky-700' : null
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
