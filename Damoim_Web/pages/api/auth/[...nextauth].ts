import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';
import { PrismaAdapter } from '@next-auth/prisma-adapter';
import { PrismaClient } from '@prisma/client';
// import prisma from '../../../lib/prismadb';
const prisma = new PrismaClient();

export default NextAuth({
  adapter: PrismaAdapter(prisma),
  callbacks: {
    session({ session, token, user }) {
      return session; // The return type will match the one returned in `useSession()`
    },
  },
  providers: [
    NaverProvider({
      clientId: process.env.NAVER_ID!,
      clientSecret: process.env.NAVER_SECRET!,
    }),
    GoogleProvider({
      clientId: process.env.GOOGLE_ID!,
      clientSecret: process.env.GOOGLE_SECRET!,
    }),
    KakaoProvider({
      clientId: process.env.KAKAO_ID!,
      clientSecret: process.env.KAKAO_SECRET!,
    }),
  ],

  secret: process.env.NEXTAUTH_SECRET,
  // session: {
  //   strategy: 'jwt',
  // },
  // jwt: {
  //   secret: process.env.SECRET,
  // },
  // database: process.env.DATABASE_URL,
  debug: false,
});
