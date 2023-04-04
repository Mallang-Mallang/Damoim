import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Tabbar';

export default function NotFound() {
  return (
    <div className="h-full flex justify-center items-center">
      <Header />
      <b>404 Error - 요청하신 페이지를 찾을 수 없습니다.</b>
      <Footer />
    </div>
  );
}
