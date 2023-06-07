import NextAuth from 'next-auth';
import GoogleProvider from 'next-auth/providers/google';
import NaverProvider from 'next-auth/providers/naver';
import KakaoProvider from 'next-auth/providers/kakao';
export default NextAuth({
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
