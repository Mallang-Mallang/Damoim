import { signIn } from 'next-auth/react';
import Image from 'next/image';
import React from 'react';

const Login = () => {
  return (
    <div className="pt-[150px] px-16">
      <h1 className="text-[40px] font-bold">회원가입하기</h1>
      <p className="text-[20px] font-normal">
        소셜 로그인으로 가입할 수 있습니다.
      </p>
      <hr className="my-8 border-1 border-dashed" />
      <div className="space-y-5">
        {/* google */}
        <div>
          <div
            className="flex relative justify-center items-center rounded-lg w-full h-[50px] bg-white hover:cursor-pointer border"
            onClick={() => {
              signIn('google', { callbackUrl: '/' });
            }}
          >
            <Image
              src="/asset/google.png"
              alt="구글 로고"
              width={30}
              height={30}
              className="absolute left-4"
            />
            <div className="text-[18px]">구글로 시작하기</div>
          </div>
        </div>
        {/* kakao */}
        <div>
          <div
            className="flex relative justify-center items-center rounded-lg w-full h-[50px] bg-[#FFE812] hover:cursor-pointer"
            onClick={() => {
              signIn('kakao', { callbackUrl: '/' });
            }}
          >
            <Image
              src="/asset/kakaoTalk_logo.svg"
              alt="카카오 로고"
              width={35}
              height={35}
              className="absolute left-4"
            />
            <div className="text-[18px]">카카오로 시작하기</div>
          </div>
        </div>
        {/* naver */}
        <div>
          <div
            className="flex relative justify-center items-center rounded-lg w-full h-[50px] bg-[#03C75A] hover:cursor-pointer"
            onClick={() => {
              signIn('naver', { callbackUrl: '/' });
            }}
          >
            <Image
              src="/asset/naver_logo.png"
              alt="네이버 로고"
              width={50}
              height={50}
              className="absolute left-2"
            />
            <div className="text-[18px] text-white">네이버로 시작하기</div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Login;
